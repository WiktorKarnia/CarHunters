<template>
  <div>
      <ul>
      <li v-for="car in cars" :key="car.id">
          <img :src="car.imageUrl" width="500" height="500"><br>
          <img :id="'heart'+car.id" :src="car.liked ? 'img/heart-filled.png' : 'img/heart-empty.png'" alt="Heart button" width="30" height="30" @click="toggleLikePost(car.id)" style="float:left"><br><br>

          <p>{{ car.uid }}</p>
          <p>{{ car.make }}</p>
          <p>{{ car.model }}</p>
          <p>{{ car.engine }}</p>
          <p>{{ car.color }}</p>

          <input style="height:50px;width:60%; margin:10px;border-radius:5px;padding:5px;" type="text" :id="'comment'+car.id" v-model="comment" placeholder="Write a comment...">
          <button class="btn" style="background-color:#7EA3F1;color:black;height:50px;width:150px;" @click="commentPost(car.id, comment)" type="button">Comment</button><br>
          <a :id="'showComments'+car.id" @click="fetchComments(car.id)">Show comments</a>
  
          <div :id="'comments'+car.id" style="display:none;margin-top:20px">
            <img src="img/delete.png" alt="X button" width="50" height="50" @click="closeComments(car.id)" style="float:right">
            <div class="my-4" v-for="(comment, index) in comments" :key="index" >
              <p>{{ comment.username }}: {{ comment.comment }}</p>
            </div> 
          </div>

      </li>
      </ul>
  </div>
</template>

<script>
    import { reactive } from 'vue';
    import { initializeApp } from "firebase/app";
    import { getAuth } from 'firebase/auth';
    import { getFirestore, query as dbQuery, where, collection, addDoc, deleteDoc, getDocs } from 'firebase/firestore';
    import { getStorage, ref, getDownloadURL } from 'firebase/storage';
    import firebaseConfig from "../firebaseConfig";
    import { db } from '../main';
  
    export default {
      setup() {
        const cars = reactive([]);
        const comment = ref('');
        const comments = reactive([]);
        const auth = getAuth()
        const uid = auth.currentUser.uid

        const likePost = async (post_id) => {
          const collectionRefLikes = collection(db, "likes");
          const likedPost = {
            uid: uid,
            post_id: post_id
          };
          try {
            const docRef = await addDoc(collectionRefLikes, likedPost);
            console.log('Post liked! Added with id: ' + docRef.id);
            document.getElementById("heart"+post_id).src = "img/heart-filled.png";
            
            // Update the "liked" property of the corresponding car object
            const car = cars.find(car => car.id === post_id);
            if (car) {
              car.liked = true;
            }
          } catch (error) {
            console.log(error.message);
          }
        };
          
          const commentPost = (post_id, commentContent) => {
            if (commentContent.trim() !== "") {
              const user = auth.currentUser
              //const uid = user.uid
              const username = user.displayName;
              const collectionRefComments = collection(db, "comments");
              const newComment = {
                uid: uid,
                comment: commentContent,
                post_id: post_id,
                username: username,
              }
              addDoc(collectionRefComments, newComment)
              .then((docRef) => {
                console.log(commentContent)
                console.log('Post Commented! Added with id: ' + docRef.id)
                document.getElementById('comment'+post_id).value = ''
              })

              .catch((error) => {
                console.log(error.message);
              });
            } else {
              alert("Cannot post an empty comment!")
            }
          }
        
          const fetchComments = (post_id) => {
            getDocs(collection(db, "comments"))
            .then(docs => {
              docs.forEach(doc => {
                if (doc.data().post_id == post_id) {
                  const Comment = {
                    id: doc.id,
                    username: doc.data().username,
                    comment: doc.data().comment,
                  }
                  comments.push(Comment)
                }
              })
              if(comments.length == 0){
                alert("No comments yet!")
              }else{
                document.getElementById('showComments'+post_id).style.display = "none"
                document.getElementById('comments'+post_id).style.display = "block"
              }
            });
          }
          const closeComments = (post_id) => {
            comments.splice(0); // Clear the comments array
            document.getElementById('comments'+post_id).style.display = "none";
            document.getElementById('showComments'+post_id).style.display = "block";
          }

          const dislikePost = async (post_id) => {
            const likesRef = collection(db, 'likes');
            const query = query(likesRef, where('uid', '==', uid), where('post_id', '==', post_id));
            const existingLikes = await getDocs(query);
            
            existingLikes.forEach(async (doc) => {
              await deleteDoc(doc.ref);
            });
            console.log('Post with id: '+post_id+' disliked')
          }

          const toggleLikePost = (post_id) => {
            const collectionRefLikes = collection(db, "likes");
            const queryRef = dbQuery(collectionRefLikes, where("uid", "==", uid), where("post_id", "==", post_id));
            getDocs(queryRef).then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                console.log(`Deleting like ${doc.id}`);
                deleteDoc(doc.ref);
                // Update the "liked" property of the corresponding car object
                const car = cars.find((car) => car.id === post_id);
                if (car) {
                  car.liked = false;
                }
              });
              if (querySnapshot.size === 0) {
                console.log("Adding new like");
                likePost(post_id);
              }
            });
          };
        
          getDocs(collection(db, "cars"))
          .then(async (querySnapshot2) => {
            for (const doc of querySnapshot2.docs) {
              const storage = getStorage();
              const refImage = ref(storage, 'cars/' + doc.id + '.jpg');
              const imageUrl = await getDownloadURL(refImage);
              
              // Check whether the current user has already liked this post
              const likesRef = collection(db, 'likes');
              const query = dbQuery(likesRef, where('uid', '==', uid), where('post_id', '==', doc.id));
              const existingLikes = await getDocs(query);
              const likeExists = existingLikes.docs.length > 0;
              
              cars.push({
                id: doc.id,
                make: doc.data().make,
                model: doc.data().model,
                engine: doc.data().engine,
                color: doc.data().color,
                imageUrl: imageUrl,
                liked: likeExists // add a new "liked" property to the car object
              });
            }
          });
      
        return {
          cars,
          likePost,
          dislikePost,
          toggleLikePost,
          commentPost,
          closeComments,
          fetchComments,
          comment,
          comments
        };
      }   
    }
</script>


<style scoped>
li {
  display: inline-block;
  margin: 10px;
  background-color: white;
  box-shadow: 0px 0px 5px #888;
  border-radius: 5px;
  text-align: center;
}

img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

p {
  margin: 5px;
  font-size: 14px;
  color: #555;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
</style>
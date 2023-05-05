<template>
    <div>
        <ul>
        <li v-for="car in cars" :key="car.id" @mouseleave="closeComments(car.id)">
            <img :src="car.imageUrl" width="500" height="500"><br>
            <img :id="'heart'+car.id" :src="'img/heart-filled.png'" alt="Heart button" width="30" height="30" style="float:left">
            <p style="float:left">{{ car.likes }}</p>
            <img :id="'showComments'+car.id" @click="fetchComments(car.id)" src='img/comment.png' alt="Comments" width="30" height="30" style="float:left">
            <p style="float:left">{{ car.comments }}</p>
            <br><br>

            <p>{{ car.username }}</p>
            <p>{{ car.make }}</p>
            <p>{{ car.model }}</p>
            <p>{{ car.engine }}</p>
            <p>{{ car.color }}</p>
  
            <input style="height:50px;width:60%; margin:10px;border-radius:5px;padding:5px;" type="text" :id="'comment'+car.id" v-model="carComment[car.id]" placeholder="Write a comment...">
            <button class="btn" style="background-color:#7EA3F1;color:black;height:50px;width:150px;" @click="commentPost(car.id, carComment[car.id])" maxlength="150" type="button">Comment</button><br>
            
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
    import { where, getFirestore, query as dbQuery,  collection, addDoc, deleteDoc, getDocs, orderBy, serverTimestamp } from 'firebase/firestore';    
    import { getStorage, ref, getDownloadURL } from 'firebase/storage';
    import firebaseConfig from "../firebaseConfig";
    import { db } from '../main'; 
  
    
    export default {
      setup() {
        const cars = reactive([]);
        const carComment = reactive({});
        const comments = reactive([]);
        const auth = getAuth()
        const uid = auth.currentUser.uid

        const commentPost = (post_id, commentContent) => {
          if (commentContent.trim() !== "") {
            const user = auth.currentUser;
            const username = user.displayName;
            const collectionRefComments = collection(db, "comments");
            const newComment = {
              uid: uid,
              comment: commentContent,
              post_id: post_id,
              username: username,
              createdAt: serverTimestamp()
            }
            addDoc(collectionRefComments, newComment)
              .then(async (docRef) => {
                console.log(commentContent)
                console.log('Post Commented! Added with id: ' + docRef.id)
                carComment[post_id] = '';
                const car = cars.find((car) => car.id === post_id)
                car.comments = await countComments(post_id);
                fetchComments(post_id);
              })
              .catch((error) => {
                console.log(error.message);
              });
          } else {
            alert("Cannot post an empty comment!")
          }
        }
        
        const fetchComments = (post_id) => {
          comments.splice(0);
          getDocs(dbQuery(collection(db, "comments"), orderBy('createdAt', 'desc')))
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
              document.getElementById('comments'+post_id).style.display = "block"
            }
          });
        }

        const closeComments = (post_id) => {
            comments.splice(0); // Clear the comments array
            document.getElementById('comments'+post_id).style.display = "none";
            document.getElementById('showComments'+post_id).style.display = "block";
            }

        const countLikes = async (post_id) => {
            const querySnapshot2 = await getDocs(dbQuery(collection(db, 'likes'), where('post_id', '==', post_id)))
            return querySnapshot2.docs.length;
        }

        const countComments = async (post_id) => {
        const querySnapshot2 = await getDocs(dbQuery(collection(db, 'comments'), where('post_id', '==', post_id)))
        return querySnapshot2.docs.length;
        }


        getDocs(dbQuery(collection(db, 'cars'), orderBy('createdAt', 'desc'), where('uid', '==', uid)))
          .then(async (querySnapshot2) => {
            for (const doc of querySnapshot2.docs) {
                const storage = getStorage();
                const refImage = ref(storage, 'cars/' + doc.id + '.jpg');
                const imageUrl = await getDownloadURL(refImage)
                const likesCount = await countLikes(doc.id);
                const commentsCount = await countComments(doc.id);

                cars.push({
                  id: doc.id,
                  username: doc.data().username,
                  make: doc.data().make,
                  model: doc.data().model,
                  engine: doc.data().engine,
                  color: doc.data().color,
                  imageUrl: imageUrl,
                  likes: likesCount,
                  comments: commentsCount
                });
            }
        });
      
        return {
          cars,
          commentPost,
          closeComments,
          fetchComments,
          carComment,
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
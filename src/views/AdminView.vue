<template>
  <div>
      <ul>
      <li v-for="car in cars" :key="car.id" @mouseleave="closeComments(car.id)">
          <img :src="car.imageUrl" width="500" height="500" @dblclick="toggleLikePost(car.id)"><br>
          <img :id="'heart'+car.id" :src="car.liked ? 'img/heart-filled.png' : 'img/heart-empty.png'" alt="Heart button" width="30" height="30" @click="toggleLikePost(car.id)" style="float:left">
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
          <button class="btn" style="background-color:#7EA3F1;color:black;height:50px;width:150px;" @click="commentPost(car.id, carComment[car.id])" type="button">Comment</button><br>
  
          <div :id="'comments'+car.id" style="display:none;margin-top:20px">
            <img src="img/delete.png" alt="X button" width="50" height="50" @click="closeComments(car.id)" style="float:right">
            <div class="my-4" v-for="(comment, index) in comments" :key="index">
              <p>{{ comment.username }}: {{ comment.comment }}</p>
            </div>
          </div>
          
          <button class="btn btn-danger" @click="deleteCar(car.id)">Delete</button>

      </li>
      </ul>
  </div>
</template>

<script>
    import { reactive } from 'vue';
    import { initializeApp } from "firebase/app";
    import { getAuth } from 'firebase/auth';
    import { getFirestore, query as dbQuery, where, collection, addDoc, deleteDoc, getDocs, orderBy, serverTimestamp, doc, getDoc, setDoc } from 'firebase/firestore';
    import { getStorage, ref, getDownloadURL, deleteObject } from 'firebase/storage';
    import firebaseConfig from "../firebaseConfig.js";
    import { db } from '../main'; 
  
    
    export default {
      setup() {
        const cars = reactive([]);
        const carComment = reactive({});
        const comments = reactive([]);
        const auth = getAuth()
        const uid = auth.currentUser.uid
        
        //Likes

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
            
            const car = cars.find(car => car.id === post_id);
            if (car) {
              car.liked = true;
              car.likes = await countLikes(post_id);
            }
          } catch (error) {
            console.log(error.message);
          }
        };

        const dislikePost = async (post_id) => {
          const likesRef = collection(db, 'likes');
          const query = dbQuery(likesRef, where('uid', '==', uid), where('post_id', '==', post_id));
          const existingLikes = await getDocs(query);
          
          existingLikes.forEach(async (doc) => {
            await deleteDoc(doc.ref);
          });
          console.log('Post with id: '+post_id+' disliked');


          const car = cars.find(car => car.id === post_id);
          if (car) {
            car.liked = false;
            car.likes = await countLikes(post_id);
          }
        };

        const toggleLikePost = (post_id) => {
          const collectionRefLikes = collection(db, "likes");
          const queryRef = dbQuery(collectionRefLikes, where("uid", "==", uid), where("post_id", "==", post_id));
          getDocs(queryRef).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(`Deleting like ${doc.id}`);
              deleteDoc(doc.ref);

              const car = cars.find((car) => car.id === post_id);
              if (car) {
                car.liked = false;
                car.likes = car.likes - 1;
              }
            });
            if (querySnapshot.size === 0) {
              console.log("Adding new like");
              likePost(post_id);
            }
          });
          
        };

        const countLikes = async (post_id) => {
          const querySnapshot2 = await getDocs(dbQuery(collection(db, 'likes'), where('post_id', '==', post_id)))
          return querySnapshot2.docs.length;
        }

        //Comments
          
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
          comments.splice(0);
          console.log('closed comments')
          document.getElementById('comments'+post_id).style.display = "none";
          document.getElementById('showComments'+post_id).style.display = "block";
        }

        const countComments = async (post_id) => {
          const querySnapshot2 = await getDocs(dbQuery(collection(db, 'comments'), where('post_id', '==', post_id)))
          return querySnapshot2.docs.length;
        }

        //Posts
      
        getDocs(dbQuery(collection(db, 'cars'), orderBy('createdAt', 'desc')))
        .then(async (querySnapshot2) => {
          for (const doc of querySnapshot2.docs) {
            const storage = getStorage();
            const refImage = ref(storage, 'cars/' + doc.id + '.jpg');
            const imageUrl = await getDownloadURL(refImage);
            const likesCount = await countLikes(doc.id);
            const commentsCount = await countComments(doc.id);
            
            // Check if liked
            const likesRef = collection(db, 'likes');
            const query = dbQuery(likesRef, where('uid', '==', uid), where('post_id', '==', doc.id));
            const existingLikes = await getDocs(query);
            const likeExists = existingLikes.docs.length > 0;
            
            cars.push({
              id: doc.id,
              likes: likesCount,
              comments: commentsCount,
              username: doc.data().username,
              make: doc.data().make,
              model: doc.data().model,
              engine: doc.data().engine,
              color: doc.data().color,
              imageUrl: imageUrl,
              liked: likeExists // add a new "liked" property to the car object
            });
          }
        });

        //const otherDb = getFirestore(app);

        const deleteCar = async (carId) => {
          if (window.confirm("Are you sure you want to delete this car?")) {
            const storage = getStorage();
            const carRef = doc(db, "cars", carId);
            const carSnapshot = await getDoc(carRef);
            const carData = carSnapshot.data();

            const clonedCarRef = doc(db, "deleted-cars", carId);
            //await setDoc(clonedCarRef, {carData, reason: "admin decision"});
            const reason = window.prompt("Enter reason for deleting car:");
            carData.reason = reason;
            await setDoc(clonedCarRef, carData);

            //await deleteObject(ref(storage, `cars/${carId}.jpg`));
            await deleteDoc(carRef);

            const index = cars.findIndex(car => car.id === carId);
            if (index !== -1) {
              cars.splice(index, 1);
            }
          }
        }
      
        return {
          cars,
          likePost,
          dislikePost,
          toggleLikePost,
          commentPost,
          closeComments,
          fetchComments,
          carComment,
          comments,
          deleteCar
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
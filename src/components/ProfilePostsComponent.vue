<template>
    <div>
        <div v-if="isLoading.value" class="d-flex justify-content-center my-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <ul v-else>
          <li v-for="car in cars" :key="car.id" @mouseleave="closeComments(car.id), closeMap(car.id)">
              <div :id="'imgContainer'+car.id" style="height: 500px; width: 100%; visibility: visible;">
                <img :src="car.imageUrl" width="500" height="500" @dblclick="toggleLikePost(car.id)" style="object-fit: cover;"><br>
              </div>
    
              <div :id="'mapContainer'+car.id" style="height: 0px; width: 100%; visibility: hidden;"></div>
    
              
              <div  class="mx-2 my-2">
                <div>
                  <!-- <button @click="showMap(car.location, car.id)" style="float:right">Show Map</button> -->
                  <img :id="'showMap'+car.id" @click="showMap(car.location, car.id)" src='/img/pin.png' alt="Pin" width="30" height="30" style="float:right">
                </div>
                
                <img :id="'heart'+car.id" :src="car.liked ? './img/heart-black.png' : './img/like.png'" alt="Heart button" width="30" height="30" @click="dislikePost(car.id, car.uid)" style="float:left">
                <p style="float:left">{{ car.likes }}</p>
                <img :id="'showComments'+car.id" @click="fetchComments(car.id)" src='/img/comment.png' alt="Comments" width="30" height="30" style="float:left">
                <p style="float:left">{{ car.comments }}</p>
                <br><br>
              </div>
    
              <div class="mx-2 my-2">
                <p class="font-weight-bold" style="float:left"> {{ car.username }}: {{ car.make }} {{ car.model }}</p>
              </div><br>
              <div class="mx-2 my-2">
                <p style="float:left">{{ car.description }}</p>
              </div><br><br>
              
              <div>

                <div class="comment-container">
                  <div class="comment">
                    <input class="input" required="" type="text" :id="'comment'+car.id" maxlength="50" v-model="carComment[car.id]" autocomplete="off" placeholder="Write a comment...">
                    <span class="input-border"></span>
                  </div>
                  <div>
                    <button class="btn" style="color:black;" @click="commentPost(car.id, carComment[car.id])" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                    </svg>
                    </button>
                  </div>
                  <br>
                </div>
              </div>
    
              <div :id="'comments'+car.id" class="text-wrap" style="display:none;margin-top:20px">
                <!-- <img src="/img/delete.png" alt="X button" width="50" height="50" @click="closeComments(car.id)" style="float:right"> -->
                <div class="my-4" v-for="(comment, index) in comments" :key="index">
                  <img v-if="comment.uid === comment.currentUID" src="/img/delete.png" alt="X button" width="20" height="20" @click="deleteComment(comment.id, comment.post_id)" style="float:left">
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
    import { where, getFirestore, query as dbQuery, doc, collection, addDoc, deleteDoc, getDocs, getDoc, orderBy, serverTimestamp } from 'firebase/firestore';    
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
        const isLoading = reactive({ value: true });
        let map = null;

        const showMap = (location, post_id) => {
          const lat = location.latitude;
          const long = location.longitude;
          console.log(lat, long);
          console.log(post_id);

          const mapDiv = document.getElementById('mapContainer'+post_id)
          const imgDiv = document.getElementById('imgContainer'+post_id)
          mapDiv.style.height = '500px';
          mapDiv.style.visibility = 'visible';
          imgDiv.style.visibility = 'hidden';
          imgDiv.style.height = '0px';

          map = L.map("mapContainer"+post_id).setView([lat, long], 17);
          L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);
          L.marker([lat, long]).addTo(map);
          // document.getElementById('mapContainer'+post_id).style.display = 'block';

        }

        const closeMap = (post_id) => {
          const mapDiv = document.getElementById('mapContainer'+post_id)
          const imgDiv = document.getElementById('imgContainer'+post_id) 
          if (mapDiv.offsetWidth > 0 && mapDiv.offsetHeight > 0) {
            if (map) {
              map.remove();
              map = null;
            }
            console.log('Map closed');
            mapDiv.style.height = '0px';
            mapDiv.style.visibility = 'hidden';
            imgDiv.style.visibility = 'visible';
            imgDiv.style.height = '500px';
          }
        }

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
          if (querySnapshot2.docs.length === 0) {
            return ''
          }else{
            return querySnapshot2.docs.length;
          }
        }

        const countComments = async (post_id) => {
          const querySnapshot2 = await getDocs(dbQuery(collection(db, 'comments'), where('post_id', '==', post_id)))
          if (querySnapshot2.docs.length === 0) {
            return '';
          }else{
            return querySnapshot2.docs.length;
          }
        }
        
        const deleteComment = async (comment_id, post_id) => {
          const commentRef = doc(db, 'comments', comment_id);
          const getComment = await getDoc(commentRef);
          const commentContent = getComment.data().comment;
          const confirmationResult = confirm('Are you sure you want to delete this comment: ' + commentContent);
          if (confirmationResult) {
            await deleteDoc(commentRef);
            comments.splice(cars.findIndex(comment => comment.id === comment_id), 1);
            if (comments.length === 0) {
                closeComments()
            }
            const commentCount = await countComments(post_id);
            const car = cars.find((car) => car.id === post_id);
            car.comments = commentCount;
            console.log("Deleted the comment with id: " + comment_id);
          } else {
            console.log("Canceled");
          }
        }


        const deleteCar = async (carId) => {
          if (window.confirm("Are you sure you want to delete this post?")) {
            const storage = getStorage();
            const carRef = doc(db, "cars", carId);
            const carSnapshot = await getDoc(carRef);
            const carData = carSnapshot.data();

            const comsSnapshot = await getDocs(dbQuery(collection(db, 'comments'), where('post_id', '==', carId)));
            for (const doc1 of comsSnapshot.docs) {
              await deleteDoc(doc1)
            }
            
            const likesSnapshot = await getDocs(dbQuery(collection(db, 'likes'), where('post_id', '==', carId)));
            for (const doc2 of likesSnapshot.docs) {
              await deleteDoc(doc2)
            }

            //await deleteObject(ref(storage, `cars/${carId}.jpg`));
            await deleteDoc(carRef);

            const index = cars.findIndex(car => car.id === carId);
            if (index !== -1) {
              cars.splice(index, 1);
            }
          }
        }



        getDocs(dbQuery(collection(db, 'cars'), orderBy('createdAt', 'desc'), where('uid', '==', uid)))
          .then(async (querySnapshot2) => {
            isLoading.value = true;
            for (const doc of querySnapshot2.docs) {
                const storage = getStorage();
                const refImage = ref(storage, 'cars/' + doc.id + '.jpg');
                const imageUrl = await getDownloadURL(refImage)
                const likesCount = await countLikes(doc.id);
                const commentsCount = await countComments(doc.id);

                cars.push({
                    id: doc.id,
                    likes: likesCount,
                    uid: doc.data().uid,
                    comments: commentsCount,
                    username: doc.data().username,
                    make: doc.data().make,
                    model: doc.data().model,
                    description: doc.data().description,
                    imageUrl: imageUrl,
                    location: doc.data().location,
                });
            }
            isLoading.value = false;
        });
      
        return {
          cars,
          deleteCar,
          commentPost,
          closeComments,
          fetchComments,
          carComment,
          isLoading,
          comments,
          deleteComment,
          closeMap,
          showMap,
          map
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

.comment {
  margin:10px;
 --border-height: 1px;
 --border-before-color: rgba(221, 221, 221, 0.39);
 --border-after-color: #7843e6;
 --input-hovered-color: #4985e01f;
 position: relative;
 width: var(--width-of-input);
 flex-grow: 1;
 margin: 10px;
}
/* styling of Input */
.input {
 color: black;
 font-size: 0.9rem;
 background-color: transparent;
 width: 100%;
 box-sizing: border-box;
 padding-inline: 0.5em;
 padding-block: 0.7em;
 border: none;
 border-bottom: var(--border-height) solid var(--border-before-color);
}
/* styling of animated border */
.input-border {
 position: absolute;
 background: var(--border-after-color);
 width: 0%;
 height: 2px;
 bottom: 0;
 left: 0;
 transition: 0.3s;
}
/* Hover on Input */
input:hover {
 background: var(--input-hovered-color);
}

input:focus {
 outline: none;
}
/* here is code of animated border */
input:focus ~ .input-border {
 width: 100%;
}
/* === if you want to do animated border on typing === */
/* remove input:focus code and uncomment below code */
/* input:valid ~ .input-border{
  width: 100%;
} */

.comment-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
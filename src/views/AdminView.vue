<template>
    <h1>Moderation mode</h1>
    <div>
      <ul>
        <li v-for="car in cars" :key="car.id">
          <img :src="car.imageUrl" width="700" height="600">
          <p>{{ car.make }}</p>
          <p>{{ car.id }}</p>
          <p>{{ car.model }}</p>
          <p>{{ car.engine }}</p>
          <p>{{ car.color }}</p>
          <button class="btn btn-danger" @click="deleteCar(car.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  import { initializeApp } from "firebase/app";
  import { getFirestore, collection, getDocs, deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
  import { getStorage, ref, getDownloadURL, deleteObject } from 'firebase/storage';
  import firebaseConfig from "../firebaseConfig.js";

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage();

  export default {
    setup() {
      const cars = reactive([]);
      getDocs(collection(db, "cars")).then(async (querySnapshot) => {
        for (const doc of querySnapshot.docs) {
          const refImage = ref(storage, 'cars/' + doc.id + '.jpg');
          const imageUrl = await getDownloadURL(refImage);
          const carData = doc.data();
          cars.push({
            id: doc.id,
            make: carData.make,
            model: carData.model,
            engine: carData.engine,
            color: carData.color,
            imageUrl
          });
        }
      });

      const otherDb = getFirestore(app);

      const deleteCar = async (carId) => {
        if (window.confirm("Are you sure you want to delete this car?")) {
          const carRef = doc(db, "cars", carId);
          const carSnapshot = await getDoc(carRef);
          const carData = carSnapshot.data();

          const clonedCarRef = doc(otherDb, "deleted-cars", carId);
          await setDoc(clonedCarRef, carData);

          await deleteObject(ref(storage, `cars/${carId}.jpg`));
          await deleteDoc(carRef);

          const index = cars.findIndex(car => car.id === carId);
          if (index !== -1) {
            cars.splice(index, 1);
          }
        }
      }

      return {
        cars,
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
  
<template>
    <div>
        <ul>
        <li v-for="car in cars" :key="car.id">
            <img :src="car.imageUrl" width="700" height="600">
            <p>{{ car.make }}</p>
            <p>{{ car.model }}</p>
            <p>{{ car.engine }}</p>
            <p>{{ car.color }}</p>
        </li>
        </ul>
    </div>
</template>

<script>
    import { reactive } from 'vue';
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, getDocs } from 'firebase/firestore';
    import { getStorage, ref, getDownloadURL } from 'firebase/storage';
    import firebaseConfig from "../firebaseConfig";
  
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
  
    export default {
      setup() {
        const cars = reactive([]);
        getDocs(collection(db, "cars")).then((querySnapshot2) => {
          querySnapshot2.forEach(async (doc) => {
            const storage = getStorage();
            const refImage = ref(storage, 'cars/' + doc.id + '.jpg');
            const imageUrl = await getDownloadURL(refImage);
            cars.push({
              id: doc.id,
              make: doc.data().make,
              model: doc.data().model,
              engine: doc.data().engine,
              color: doc.data().color,
              imageUrl: imageUrl
            });
          });
        });
        return {
          cars
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
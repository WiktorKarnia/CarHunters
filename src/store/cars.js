import { defineStore } from 'pinia'
import { collection, getDocs } from 'firebase/firestore';
import { getStorage, getDownloadURL, ref } from 'firebase/storage';
import firebaseConfig from "../firebaseConfig.js";
import { db } from '../main'

export const useCarStore = defineStore('car', {
  state: () => ({
    _inProgress: false,
    cars: [],
  }),
  actions: {
    inProgressOn() { this._inProgress = true },
    inProgressOff() { this._inProgress = false },
    async fetchCarsIfNeeded() {
      if (this.cars.length === 0) {
        this.inProgressOn()
        const querySnapshot = await getDocs(collection(db, 'cars'));
        const cars = querySnapshot.docs.map(async (doc) => {
          const storage = getStorage();
          const refImage = ref(storage, 'cars/' + doc.id + '.jpg');
          const imageUrl = await getDownloadURL(refImage);
          return {
            id: doc.id,
            make: doc.data().make,
            model: doc.data().model,
            engine: doc.data().engine,
            color: doc.data().color,
            imageUrl: imageUrl
          };
        });
        this.cars = await Promise.all(cars); // update the state with the fetched cars
        this.inProgressOff()
      }
    },
  },
  getters: {
    getCars: state => state.cars,
  },
});

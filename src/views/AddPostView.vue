<template>
    <div class="container px-5 mx-5">
        <form id="form" @submit.prevent="submitForm">
            <div class="form-group">
                <label class="form-label">Marka</label>
                <input type="text" class="form-control" v-model="car.make" placeholder="Wpisz markę samochodu">
            </div>
            <div class="form-group">
                <label class="form-label">Model</label>
                <input type="text" class="form-control" v-model="car.model" placeholder="Wpisz model samochodu">
            </div>
            <div class="form-group">
                <label class="form-label">Silnik</label>
                <input type="text" class="form-control" v-model="car.engine" placeholder="Wpisz rodzaj silnika">
            </div>
            <div class="form-group">
                <label class="form-label">Kolor</label>
                <input type="text" class="form-control" v-model="car.color" placeholder="Wpisz kolor samochodu">
            </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            <div class="form-group">
                <label for="cameraFileInput" class="btn btn-primary">Wybierz zdjęcie</label>
                <input @change="openCamera" style="display:none" id="cameraFileInput" type="file" accept="image/*" capture="environment">
            </div>
            <div class="form-group">
                <img id="pictureFromCamera" class="img-fluid"/>
            </div>
        </form>
    </div>
</template>
  
<script>
    import { initializeApp } from "firebase/app";
    import { getAuth } from 'firebase/auth'
    import { getFirestore, doc, setDoc , serverTimestamp} from 'firebase/firestore';
    import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
    import firebaseConfig from "../firebaseConfig";

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    export default {
        data() {
            return {
                car: {
                make: '',
                model: '',
                engine: '',
                color: ''
                }
            };
        },
        methods: {
        async submitForm() {
            let id = (Math.random() + 1).toString(36).substring(7);
            const storage = getStorage();
            const refImg = ref(storage, "cars/" + id + ".jpg");
            const selectedFile64 = document.getElementById('pictureFromCamera').src;
            const auth = getAuth();
            const user = auth.currentUser;
            const uid = user.uid;
            const username = user.displayName;

            await uploadString(refImg, selectedFile64,'data_url');

            await setDoc(doc(db, "cars", id), {
                uid: uid,
                username: username,
                createdAt: serverTimestamp(),
                make: this.car.make,
                model: this.car.model,
                engine: this.car.engine,
                color: this.car.color,
                path: "cars/" + id + ".jpg"
            });
    
            console.log("The photo has been sent in path cars/" + id);

            this.car.username = '';
            this.car.make = '';
            this.car.model = '';
            this.car.engine = '';
            this.car.color = '';
            document.getElementById('pictureFromCamera').src = '';

            },
            openCamera(event) {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    const img = document.getElementById('pictureFromCamera');
                        img.src = reader.result;
                    }
                reader.readAsDataURL(file);
            }  
        }
    }
</script>

<style>
    .form-group {
      margin-bottom: 1rem;
    }
    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    .form-control {
      display: block;
      width: 100%;
      height: calc(1.5em + 0.75rem + 2px);
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .btn-primary {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }
    .btn-primary:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
    }
    .img-fluid {
      max-width: 100%;
      height: auto;
    }
</style>
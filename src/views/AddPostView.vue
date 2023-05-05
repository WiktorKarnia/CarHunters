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
            <div class="form-group">
                <label class="form-label">You want us to use your current location?</label>
                <label class="switch">
                    <input type="checkbox" v-model="isLocationChecked" @click="checkedBox()">
                    <span class="slider round"></span>
                </label>
            </div>
            <div id="locationDiv" class="form-group" style="display: none">
                <label class="form-label">Location</label>
                <input type="text" class="form-control" ref="origin" placeholder="Wpisz gdzie zrobiłeś zdjęcie">
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
    import { getFirestore, doc, setDoc , serverTimestamp, GeoPoint} from 'firebase/firestore';
    import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
    import firebaseConfig from "../firebaseConfig";
    import router from "../router/router";

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    export default {
        data() {
            return {
                car: {
                make: '',
                model: '',
                engine: '',
                color: '',
                },
                isLocationChecked: false,
                autocomplete: '',
                latInput: '',
                longInput: '',
            };
        },
        mounted() {
            const autocomplete = new google.maps.places.Autocomplete(this.$refs["origin"]);
            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                this.latInput = place.geometry.location.lat();
                this.longInput = place.geometry.location.lng();
                console.log("Selected location coordinates:", this.latInput, this.longInput);
            });
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

                let location = null;
                if (!this.isLocationChecked) {
                    const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                    });
                    //location = new GeoPoint(position.coords.latitude, position.coords.longitude);
                    location = new GeoPoint(position.coords.latitude+2, position.coords.longitude+2);
                } else {
                    //location = new GeoPoint(this.car.location.latitude, this.car.location.longitude);
                    location = new GeoPoint(this.latInput, this.longInput);
                }


                await setDoc(doc(db, "cars", id), {
                    uid: uid,
                    username: username,
                    createdAt: serverTimestamp(),
                    make: this.car.make,
                    model: this.car.model,
                    engine: this.car.engine,
                    color: this.car.color,
                    location: location,
                    path: "cars/" + id + ".jpg"
                });

                console.log("The photo has been sent in path cars/" + id);

                this.car.username = '';
                this.car.make = '';
                this.car.model = '';
                this.car.engine = '';
                this.car.color = '';
                this.car.location = '';
                document.getElementById('pictureFromCamera').src = '';

                router.push('/posts')
            },
            openCamera(event) {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    const img = document.getElementById('pictureFromCamera');
                        img.src = reader.result;
                    }
                reader.readAsDataURL(file);
            },

            async checkedBox() {
                const locDiv = document.getElementById('locationDiv')
                if (this.isLocationChecked) {
                    locDiv.style.display = 'none'
                    console.log(this.isLocationChecked);
                // execute code for when checkbox is checked
                } else {
                    locDiv.style.display = 'block'
                    console.log(this.isLocationChecked);
                // execute code for when checkbox is unchecked
                }
            }
        }
    }
</script>

<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
    
    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #008800;
        -webkit-transition: .4s;
        transition: .4s;
    }
    
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: #f0f0f0;
        -webkit-transition: .4s;
        transition: .4s;
    }
    
    input:checked + .slider {
        background-color: #880000;
    }
    
    input:focus + .slider {
        box-shadow: 0 0 10px #7e7e7e;
    }
    
    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    
    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }
    
    .slider.round:before {
        border-radius: 50%;
    }
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
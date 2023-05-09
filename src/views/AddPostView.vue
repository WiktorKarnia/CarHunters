<template>
    <div class="my-2 mx-5 py-2 px-5">
        <form id="form" @submit.prevent="submitForm">
            <div class="row">
                <div class="col align-self-center">
    
                    <div class="form-group">
                        <label class="form-label">Make</label>
                        <input type="text" class="form-control" v-model="car.make" placeholder="Make of the spotted car">
                    </div>
    
                    <div class="form-group">
                        <label class="form-label">Model</label>
                        <input type="text" class="form-control" v-model="car.model" placeholder="Model of the spotted car">
                    </div>
    
                    <div class="form-group">
                        <label class="form-label">Description</label>
                        <input type="text" class="form-control" v-model="car.description" placeholder="Description of your spot">
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
                        <input type="text" class="form-control" ref="origin" placeholder="Where did you take the picture?">
                    </div>
                </div>
    
                <div class="col">
                    <div class="form-group mt-5">
                        <img id="pictureFromCamera" style="width: 500px; height: 500px;object-fit: cover;"/>
                    </div>
    
                    <div class="form-group">
                        <label for="cameraFileInput" class="pick-button btn btn-primary">Pick a photo</label>
                        <input @change="openCamera" style="display:none" id="cameraFileInput" type="file" accept="image/*" capture="environment">
                    </div>
                </div>

                <div class="row">
                    <div class="col align-self-center">
                        <button type="submit" class="submit-button btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    
    <div class="modal fade" id="emptyModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Missing information!</h5>
            </div>
            <div class="modal-body">
                <p>Your post doesn't seem to be finished yet!</p>
                <p>You have to add some information to it.</p>  
            </div>
            </div>
        </div>
        </div>
    
</template>
  
<script>
    import { initializeApp } from "firebase/app";
    import { getAuth } from 'firebase/auth'
    import { getFirestore, doc, setDoc , serverTimestamp, GeoPoint} from 'firebase/firestore';
    import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
    import firebaseConfig from "../firebaseConfig.js";
    import router from "../router/router";

    


    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    export default {
        data() {
            return {
                car: {
                    make: "",
                    model: "",
                    description: "",
                },
                isLocationChecked: false,
                autocomplete: "",
                latInput: "",
                longInput: "",
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
                const selectedFile64 = document.getElementById("pictureFromCamera").src;
                const auth = getAuth();
                const user = auth.currentUser;
                const uid = user.uid;
                const username = user.displayName;

                if(selectedFile64 != ""){
                    await uploadString(refImg, selectedFile64, "data_url");
                }else{
                    $('#emptyModal').modal('show')
                }

                let location = null;
                if (!this.isLocationChecked) {
                    const position = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    });
                    //location = new GeoPoint(position.coords.latitude, position.coords.longitude);
                    location = new GeoPoint(position.coords.latitude, position.coords.longitude);
                } else {
                    //location = new GeoPoint(this.car.location.latitude, this.car.location.longitude);
                    location = new GeoPoint(this.latInput, this.longInput);
                }

                function capitalize(str) {
                    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
                }
                if (this.car.make === "" || this.car.model === "" || this.car.description === "") {
                    $('#emptyModal').modal('show')
                }else{
                    await setDoc(doc(db, "cars", id), {
                        uid: uid,
                        username: username,
                        createdAt: serverTimestamp(),
                        make: capitalize(this.car.make),
                        model: capitalize(this.car.model),
                        description: capitalize(this.car.description),
                        location: location,
                        path: "cars/" + id + ".jpg",
                    });

                    console.log("The photo has been sent in path cars/" + id);

                    this.car.username = "";
                    this.car.make = "";
                    this.car.model = "";
                    this.car.description = "";
                    this.car.location = "";
                    document.getElementById("pictureFromCamera").src = "";
                    router.push("/posts");
                }
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

<style scoped>
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
      height: 500px;
      width: 500px;
      object-fit: cover;
      /*height: auto;*/
      /*
        object-fit: cover;
        width: 100%;
        height: 0;
        padding-bottom: 100%;*/
    }
    @media screen and (max-width: 300px) {
  .bbbootstrap {
    padding: 150px 0 0 0;
  }

  .bbbootstrap form {
    width: 100%;
  }

  .bbbootstrap form input[type="text"] {
    width: 100%;
    padding-right: 80px;
  }

  .bbbootstrap form input[type="submit"] {
    position: absolute;
    top: 5px;
    right: 5px;
    float: right;
    padding: 10px 25px;
    width: auto;
  }
}
.submit-button, .pick-button{
    display: inline-block;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    margin: 1rem auto;
    padding: 0.7rem 2rem;
    border-style: none;
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: black;
    box-shadow: 1px 1px 12px #000000;
    opacity: 1;
    width: 150px;
    height: 60px;
  }
  .pick-button{
    width: 225px;
  }
  
  .submit-button::before, .pick-button::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #7843e6;
    transform: translateX(-101%);
    transition: all .3s ease;
    z-index: -1;
  }
  
  .submit-button:hover, .pick-button:hover {
    text-decoration-color: #272727;
    transition: all .3s ease;
  }
  
  .submit-button:hover::before, .pick-button:hover::before {
    transform: translateX(0);
  }
</style>
<template>
  <div>
    <ul v-if="!carPosts._inProgress">
      <li v-for="car in carPosts.getCars" :key="car.id">
        <img :src="car.imageUrl" width="500" height="500">
        <p>{{ car.make }}</p>
        <p>{{ car.model }}</p>
        <p>{{ car.engine }}</p>
        <p>{{ car.color }}</p>
      </li>
    </ul>
    <div v-else>
      Loading cars...
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useCarStore } from '../store/cars';
export default {
  setup() {
    const carPosts = useCarStore()

    carPosts.fetchCarsIfNeeded()

    const onPostAdded = () => {
      carPosts.fetchCarsIfNeeded();
    };
    onMounted(() => {
      document.addEventListener('postAdded', onPostAdded);
    })

    return { carPosts }
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
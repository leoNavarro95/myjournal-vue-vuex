<template>
    <div class="container text-center mt-3">
      <div class="row">
        <div class="col-6 col-md-8"> 
          <h1>My journal</h1>
        </div>
        <div class="col-6 col-md-4"> 
          <button @click="goToDaybook" class="btn btn-primary">enter</button>
        </div>
      </div>
      <hr>
    </div>

  <div class="container">
    <carousel></carousel>
  </div>
      
</template>

<script>
import { useRouter } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import * as Bootstrap from 'bootstrap'

import Carousel from "../components/Carousel"
// import TestimonialCard from "../components/TestimonialCard.vue";

export default {

  components:{
    Carousel
    // TestimonialCard,
  },

  setup(){
    const router = useRouter()

    var myCarousel = document.querySelector('#carousel')
    new Bootstrap.Carousel(myCarousel)

    return{
      goToDaybook(){
        router.push({name: 'login'})
      }
    }  
  }
}
</script>

<style scoped lang="scss">

@media (min-width: 992px) {
  .alto-100{
    height: 100vh;
  }
}

.profile-img{
  height: 75px;
  width: 75px;
}

</style>
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

  <hr>

  <footer class="m-0 p-5 bg-primary text-white d-none d-sm-block my-footer">
    <div class="container">

      <div class="row">
        <!-- Developed By -->
        <div class="col-md-6 col-sm-12">
          <p class="fs-4 fw-lighter">Developed By</p>
          <div class="row">
            <div class="col-12">
              <p class="fs-6">Leonardo Navarro</p>
            </div>
          </div>
        </div>

        <!-- GET IN TOUCH -->
        <div class="col-md-6 col-sm-12">
          <p class="fs-4 fw-lighter">Get in touch</p>
          <div class="row">
            <div class="col-12">
              <a href="mailto:potty3800@gmail.com" class="fs-6 text-reset">email</a>
            </div>
          </div>
        </div>

        <!-- CONNECT -->
        <div class="col-md-6 col-sm-12">
          <p class="fs-4 fw-lighter">Connect</p>
          <div class="row">
            <div class="col-12">
              <a href="https://www.linkedin.com/in/leonavarro95/" class="fs-6 text-reset">linkedIn</a>
            </div>
            <div class="col-12">
              <a href="https://t.me/LeoAutomation" class="fs-6 text-reset">Telegram</a>
            </div>
            <div class="col-12">
              <a href="https://twitter.com/LeoNavarro95" class="fs-6 text-reset">Twitter</a>
            </div>
            <div class="col-12">
              <a href="https://github.com/leoNavarro95" class="fs-6 text-reset">Github</a>
            </div>
          </div>
        </div>

        <!-- CODE -->
        <div class="col-md-6 col-sm-12">
          <p class="fs-4 fw-lighter">Code</p>
          <div class="row">
            <div class="col-12">
              <a href="https://github.com/leoNavarro95" class="fs-6 text-reset">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="fs-5 fw-lighter text-center mt-5 mb-0"> ® 2022-Leonardo Navarro</p>

  </footer>


  
</template>

<script>
import { useRouter } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import * as Bootstrap from 'bootstrap'

import Carousel from "../components/Carousel"
// import TestimonialCard from "../components/TestimonialCard.vue";
import Swal from 'sweetalert2';

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

.my-footer{
  border-radius: 55px 55px 0px 0px;
  align-content: center;
  justify-content: center;
}

.fs-4{
  margin-bottom: 1px;
  margin-top: 5px;
}

</style>
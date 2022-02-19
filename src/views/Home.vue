<template>
    <div class="container text-center mt-3">
      <div class="row">
        <div class="col-6 col-md-3"> 
          <h1>Mi diario</h1>
        </div>
        <div class="col-6 col-md-1"> 
          <button @click="goToDaybook" class="btn btn-primary">entrar</button>
        </div>
      </div>
      <hr>
    </div>


    
    <div class="container align-items-center justify-content-center alto-100">
      <h4 class="mb-2 fs-3 lh-2">Testimonios</h4>
      <div class="row">
        <div class="col-12 col-md-9">

          <div class="row">
            <div class="col-12 col-md-8 p-2">
              
              <TestimonialCard 
                userName        = "Daniel Clifford"
                userStatus      = "Verified Graduate"
                pictureFilename = "image-daniel.jpg"
                color           = "info"
              >
                <template v-slot:text1>
                  I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
                </template>
                <template v-slot:text2>
                  “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
                </template>
              </TestimonialCard>
            </div>

            <div class="col-12 col-md-4 p-2">
              <TestimonialCard 
                userName        = "Jonathan Walters"
                userStatus      = "Verified Graduate"
                pictureFilename = "image-jonathan.jpg"
                color           = "warning"
              >
                <template v-slot:text1>
                  The team was very supportive and kept me motivated
                </template>
                <template v-slot:text2>
                  “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”
                </template>
              </TestimonialCard>

            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4 p-2">
              <TestimonialCard 
                userName        = "Jeanette Harmon"
                userStatus      = "Verified Graduate"
                pictureFilename = "image-jeanette.jpg"
                color           = "light"
              >
                <template v-slot:text1>
                  An overall wonderful and rewarding experience
                </template>
                <template v-slot:text2>
                  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
                </template>
              </TestimonialCard>
            </div>
            <div class="col-12 col-md-8 p-2">
              <TestimonialCard 
                userName        = "Patrick Abrams"
                userStatus      = "Verified Graduate"
                pictureFilename = "image-patrick.jpg"
                color           = "success"
              >
                <template v-slot:text1>
                  Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
                </template>
                <template v-slot:text2>
                  “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”
                </template>
              </TestimonialCard>
            </div>
          </div>

        </div>

        <div class="col-12 col-md-3 p-2 text-white">
          <TestimonialCard 
                userName        = "Kira Whittle"
                userStatus      = "Verified Graduate"
                pictureFilename = "image-kira.jpg"
                color           = "secondary"
              >
                <template v-slot:text1>
                  Such a life-changing experience. Highly recommended!
                </template>
                <template v-slot:text2>
                  “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience.”
                </template>
              </TestimonialCard>
        </div>

      </div>
      
    </div>


    
</template>

<script>
import { useRouter } from 'vue-router'
import TestimonialCard from "../components/TestimonialCard.vue";

export default {

  components:{
    TestimonialCard,
  },

  setup(){
    const router = useRouter()

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
<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">

        <div class="bg-primary carousel-item active" data-bs-interval="10000">
          <img src="../assets/memories/memories1.jpg" class="img-fluid w-100 d-block" alt="memories1">
          <div class="text-black carousel-caption d-md-block blured">
            <h1 class="fs-1 lh-1 d-none d-sm-block">Save your memories</h1>
            <p class="fs-6 lh-1 pa-1">A good place to keep what happened today</p>
          </div>
        </div>

        <div class="bg-warning carousel-item" data-bs-interval="2000">
          <img src="../assets/memories/memories2.jpg" class="img-fluid w-100 d-block" alt="memories2">
          <div class="text-black carousel-caption d-md-block blured">
            <h1 class="fs-1 lh-1 d-none d-sm-block">Every detail is important</h1>
            <p class="fs-6 lh-1 pa-1">Preserve every little moment</p>
          </div>
        </div>

        <div class="bg-info carousel-item">
          <img src="../assets/memories/memories3.jpg" class="img-fluid w-100 d-block" alt="memories3">
          <div class="text-white carousel-caption d-md-block blured">
            <h1 class="fs-1 lh-1 d-none d-sm-block">Save a picture of a moment</h1>
            <p class="fs-6 lh-1 pa-1">A picture speaks more than a thousand words</p>
          </div>
        </div>

      </div>


      <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</template>


<style scoped>
img {
  -webkit-filter: grayscale(90%); /* Safari 6.0 - 9.0 */
  filter: grayscale(90%);
}

.blured{
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 0;
  margin: 0;
  
}
</style>
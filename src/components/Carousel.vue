<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="bg-primary carousel-item active" data-bs-interval="10000">
          <img src="../assets/logo.png" class="d-block w-25" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="bg-primary carousel-item" data-bs-interval="2000">
          <img src="../assets/logo.png" class="d-block w-25" alt="...">
        </div>
        <div class="bg-primary carousel-item">
          <img src="../assets/logo.png" class="d-block w-25" alt="...">
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

<script>
export default {

}
</script>

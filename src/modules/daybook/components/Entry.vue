<template>
  <div class="entry-container mb-3 pointer p-2">
      
      <!-- Entry Title -->
      <div class="entry-title d-flex">
          <span class="text-success fw-bold fs-5">22</span>
          <span class="mx-1 fs-5">diciembre</span>
          <span class="mx-2 fw-light">2021, mie</span>
      </div>

      <!-- Entry description -->
      <div class="entry-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eum fugit, beatae laboriosam quis at repellat ratione impedit, maiores harum hic ab ad quam totam autem. Quod, voluptatem. Maiores, aliquam.
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang = "scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 35);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}
</style>
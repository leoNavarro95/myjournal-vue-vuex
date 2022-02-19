<template>
  <article class="card h-100" :class="`bg-${color}`">
    <div class="card-body">
      <div class="d-flex mb-3">
        <!-- Profile Pic -->
        <img
          :src="require(`../assets/images/${pictureFilename}`)"
          alt="profile photo"
          class="profile-img border border-secondary border-2 rounded-circle"
        />

        <!-- User Name -->
        <div class="ps-3">
          <!-- ps-*: padding left; pe-*: pading right -->
          <h6 class="m-0">{{ userName }}</h6>
          <p class="m-0">{{ userStatus }}</p>
        </div>
      </div>

      <!-- texto -->
      <div>
		<p class="h6">
			<slot name="text1"></slot>
		</p>

		<p class="fs-6 lh-1">
			<slot name="text2"></slot>
		</p>

      </div>
    </div>
  </article>
</template>

<script>
export default {
	props:{
		userName:{
			type: String,
			requiered: true,
			default: "User-Name"
		},
		userStatus:{
			type: String,
			requiered: true,
			default: "User-Status"
		},
		pictureFilename:{
			type: String,
			requiered: true,
			default: "image-daniel.jpg"
		},
		color:{
			type: String,
			requiered: false,
			default: "primary"
		}
	},
	setup(){

	}
};
</script>

<style>
</style>
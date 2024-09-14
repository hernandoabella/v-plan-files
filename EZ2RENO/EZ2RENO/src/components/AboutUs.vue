<script setup lang="ts"></script>

<template>
  <div class="p-md-5 m-md-5 mt-5">
    <h2 class="fw-bold text-center">About EZ2 Reno</h2>
    <h6 class="fw-bold text-center blue-color">Our Mission</h6>
    <p class="gray-color col-md-6 mx-auto px-5">
      At EZ2 Reno, our mission is to build homes that inspire and delight. We
      believe that a home should be more than just a place to live - it should
      be a reflection of your personality and style. We work closely with our
      clients to understand their unique needs and preferences, and we use our
      expertise to create homes that exceed their expectations and make it an
      effortless home renovation for you.
    </p>
    <div class="col-md-6 mx-auto d-flex flex-wrap justify-content-center gap-4 mt-5">
      <div class="img-container">
        <img src="/public/image 141.png" alt="renovation" class="img-fluid" />
      </div>
      <div class="img-container">
        <img src="/public/ProjectCard.png" alt="renovation" class="img-fluid" />
      </div>
      <div class="img-container">
        <img src="/public/image139.png" alt="renovation" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Center text and adjust width for smaller screens */
.w-75 {
  width: 75%;
}

@media (max-width: 767px) {
  .w-75 {
    width: 90%;
  }
}

/* Ensure images are responsive */
.img-fluid {
  max-width: 100%;
  height: auto;
}

/* Adjust layout for images */
.img-container {
  flex: 1 1 200px; /* Allow images to shrink and grow with a base width */
}

@media (max-width: 767px) {
  .img-container {
    flex: 1 1 100%; /* Make images stack vertically on smaller screens */
    text-align: center;
  }

  .img-container img {
    width: 80%; /* Adjust image width on mobile */
    margin: 0 auto;
  }
}
</style>

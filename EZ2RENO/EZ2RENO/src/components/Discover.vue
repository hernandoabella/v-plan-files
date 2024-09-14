<script setup lang="ts"></script>

<template>
  <div class="p-md-5 m-5">
    <h2 class="text-center fw-bolder">Discover Your Dream Home</h2>
    <p class="text-center">
      At EZ2 Reno, our mission is to build homes that <br/> inspire and delight. Photo Gallery.
    </p>

    <div class="col-md-6 mx-auto">
      <!-- Main Image -->
      <div class="mb-4">
        <img src="/public/image 139.png" alt="kitchen" class="img-fluid" />
      </div>
      <!-- Gallery Images -->
      <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-2 g-md-3">
        <div class="col">
          <img src="/public/image 139.png" alt="kitchen" class="img-fluid" />
        </div>
        <div class="col">
          <img src="/public/image 139.png" alt="kitchen" class="img-fluid" />
        </div>
        <div class="col">
          <img src="/public/image 139.png" alt="kitchen" class="img-fluid" />
        </div>
        <div class="col">
          <img src="/public/image 139.png" alt="kitchen" class="img-fluid" />
        </div>
        <div class="col">
          <img src="/public/image 139.png" alt="kitchen" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure images are responsive and scale appropriately */
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>

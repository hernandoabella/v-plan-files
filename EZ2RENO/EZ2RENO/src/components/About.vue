<script setup lang="ts"></script>

<template>
  <div class="mx-auto col-md-6">
    <div class="d-flex justify-content-center m-5">
      <div class="p-md-5 about-it">
        <div
          class="bg-blue-dark p-5 col-12 col-md-6 position-relative blue-card"
        >
          <h2 class="text-light mb-5">About it</h2>
          <p class="text-light">
            Building quality homes for families just like yours. Get your
            bathroom upgrades delivered to you by professionals. Add extra
            income by legal basements making it an effortless home renovation
            for you.
          </p>
          <button class="rounded bg-light p-2 border-0">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-it {
  background: url("/public/kitchen.png");
  background-repeat: no-repeat;
  height: 600px;
}

.blue-card {
  left: 560px;
  bottom: -55px;
}

@media (max-width: 768px) {
  .about-it {
    background: url("/public/kitchen.png");
    background-repeat: no-repeat;
    height: auto;
  }

  .blue-card {
    left: 0px;
    bottom: 0px;
  }
}
</style>

<script setup lang="ts"></script>

<template>
  <div class="text-center cta w-100">
    <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 gap-md-5">
      <h4 class="fw-bold text-light m-0">
        Free consultation with exceptional quality
      </h4>
      <button class="p-2 text-light border border-light cta-btn bg-transparent">
        Get your consultation
      </button>
    </div>
  </div>
</template>

<style scoped>
.cta {
  background: url("/public/unsplash_MP0bgaS_d1c.png") no-repeat center center;
  background-size: cover; /* Ensures the background image covers the container */
  padding: 100px;
}

@media (max-width: 767px) {
  .cta {
    padding: 50px; /* Adjust padding for mobile screens */
  }
}

.cta-btn {
  /* Add additional styles for the button if needed */
}

@media (max-width: 767px) {
  .cta-btn {
    font-size: 16px; /* Adjust font size for smaller screens */
    padding: 12px 24px; /* Adjust padding for smaller screens */
  }
}
</style>

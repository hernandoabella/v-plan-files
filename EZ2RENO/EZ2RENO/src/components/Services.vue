<script setup lang="ts"></script>

<template>
  <div class="px-5 col-8 col-12 mx-auto">
    <div>
      <h2 class="text-center fw-bold">Services</h2>

      <div class="grid-container mx-auto col-md-8">
        <!-- Primera tarjeta -->
        <div class="service-card my-4">
          <h4 class="text-center blue-color">
            Building Design and <br />
            Permits
          </h4>
          <p class="text-secondary text-center">15 mins | Free</p>
          <div class="d-flex rounded">
            <button
              class="text-center bg-black text-light m-auto border-0 p-2 rounded"
            >
              Find More
            </button>
          </div>
        </div>

        <!-- Segunda tarjeta -->
        <div class="service-card my-4 bg-blue-dark text-light">
          <h4 class="text-center">
            Basement legalization - <br />
            Permit to Project
          </h4>
          <p class="text-secondary text-center text-light">15 mins | Free</p>
          <div class="d-flex rounded">
            <button
              class="text-center bg-black text-light m-auto border-0 p-2 rounded"
            >
              Find More
            </button>
          </div>
        </div>

        <!-- Tercera tarjeta -->
        <div class="service-card my-4">
          <h4 class="text-center blue-color">
            Kitchen & Cabinetry <br />
            Upgrades
          </h4>
          <p class="text-secondary text-center">15 mins | Free</p>
          <div class="d-flex rounded">
            <button
              class="text-center bg-black text-light m-auto border-0 p-2 rounded"
            >
              Find More
            </button>
          </div>
        </div>

        <!-- Cuarta tarjeta -->
        <div class="service-card my-4 bg-blue-dark text-light">
          <h4 class="text-center">Bathroom Upgrades</h4>
          <p class="text-light text-center">15 mins | Free</p>
          <div class="d-flex rounded">
            <button
              class="text-center bg-black text-light m-auto border-0 p-2 rounded"
            >
              Find More
            </button>
          </div>
        </div>

        <!-- Quinta tarjeta -->
        <div class="service-card my-4">
          <h4 class="text-center blue-color">Flooring Upgrades</h4>
          <p class="text-secondary text-center">15 mins | Free</p>
          <div class="d-flex rounded">
            <button
              class="text-center bg-black text-light m-auto border-0 p-2 rounded"
            >
              Find More
            </button>
          </div>
        </div>

        <!-- Sexta tarjeta -->
        <div class="service-card my-4 bg-blue-dark text-light">
          <h4 class="text-center">
            General Maintenance - <br />
            Small or Big, We Handle All
          </h4>
          <p class="text-secondary text-center text-light">15 mins | Free</p>
          <div class="d-flex rounded">
            <button
              class="text-center bg-black text-light m-auto border-0 p-2 rounded"
            >
              Find More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Grid container for services cards */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-gap: 20px; /* Space between cards */
  padding: 20px;
}

/* Media query for tablets - 2 columns */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
    grid-gap: 15px;
    padding: 15px;
  }
}

/* Media query for mobile - 1 column */
@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr; /* 1 column on mobile */
    grid-gap: 10px;
    padding: 10px;
  }
}

/* Service card styles */
.service-card {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.bg-blue-dark {
  background-color: #1d4e89;
}

.gap-30 {
  gap: 100px;
}
</style>

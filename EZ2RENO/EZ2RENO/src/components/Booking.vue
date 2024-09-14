<script setup lang="ts"></script>

<template>
  <div class="m-5 p-md-5">
    <div
      class="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 m-auto"
    >
      <div class="d-flex flex-column position-relative mr">
        <!-- Card 1 -->
        <div
          class="shadow p-3 mb-5 bg-white rounded card card-1 position-relative"
        >
          <div class="icon">
            <img
              class="icon-1 position-absolute"
              src="/public/illus (1).png"
              alt="icon"
            />
          </div>
          <div class="fw-bold fs-big">84</div>
          <div class="fs-4 text-secondary d-flex gap-2">
            <div class="bg-orange sqre"></div>
            Happy Clients
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="shadow p-3 mb-5 bg-white rounded card card-2 position-relative"
        >
          <div class="icon">
            <img
              class="icon-2 position-absolute"
              src="/public/illus (2).png"
              alt="icon"
            />
          </div>
          <div class="fw-bold fs-big">123</div>
          <div class="fs-4 text-secondary d-flex gap-2">
            <div class="bg-orange sqre"></div>
            Projects Completed
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="shadow p-3 mb-5 bg-white rounded card card-3 position-relative"
        >
          <div class="icon">
            <img
              class="icon-3 position-absolute"
              src="/public/illus.png"
              alt="icon"
            />
          </div>
          <div class="fw-bold fs-big">10</div>
          <div class="fs-4 text-secondary d-flex gap-2">
            <div class="bg-orange sqre"></div>
            Years in Business
          </div>
        </div>
      </div>
      <div>
        <h1 class="fw-bold blue-color mb-4 fs-extra">
          Book a <br />
          service call
        </h1>

        <div>
          <label class="fw-bold">Full name</label> <br />
          <input
            class="p-2 w-100"
            type="text"
            name="name"
            placeholder="Full name"
          />
          <br /><br />
          <label class="fw-bold">Email address</label> <br />
          <input
            class="p-2 w-100"
            type="text"
            name="name"
            placeholder="Email address"
          />
          <br /><br />
          <div class="d-flex justify-content-center">
            <button class="bg-blue-dark text-light fw-bold p-3 rounded-5 w-100">
              Book A Service Call
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* General Styles */

.mr {
  margin-left: 200px;
}

.fs-big {
  font-size: 60px;
}

.fs-extra {
  font-size: 70px;
}

.sqre {
  background: orange;
  width: 8px;
  height: 35px;
}

.gap {
  gap: 200px;
}

.card {
  position: relative;
  width: 100%;
}

/* Card positioning */
.card-1 {
  left: -50px;
  bottom: -100px;
  z-index: 1;
}

.card-2 {
  right: 200px;
}

.card-3 {
  top: -60px;
  right: 50px;
}

/* Icon positioning */
.icon-1 {
  right: -40px;
  top: -30px;
}

.icon-2 {
  left: -50px;
  top: -30px;
}

.icon-3 {
  right: -30px;
  top: -20px;
}

/* Responsive Styles */
@media (max-width: 767px) {
  .mr {
    margin-left: 0;
  }

  .gap {
    gap: 20px; /* Adjust gap for smaller screens */
  }

  .fs-big {
    font-size: 40px; /* Adjust font size for smaller screens */
  }

  .fs-extra {
    font-size: 50px; /* Adjust font size for smaller screens */
  }

  .card {
    position: relative; /* Remove absolute positioning */
    margin-bottom: 20px; /* Adjust margin for cards */
  }

  .card-1,
  .card-2,
  .card-3 {
    position: relative;
    width: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
  }

  .icon-1,
  .icon-2,
  .icon-3 {
    position: static;
    display: block;
    margin: 0 auto; /* Center icons if needed */
  }
}
</style>

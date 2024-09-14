<script setup lang="ts"></script>

<template>
  <div class="p-5">
    <h3 class="text-center fw-bold">What can we do for you?</h3>
    <p class="text-center">
      We are ready to work on a project of any complexity, <br />
      whether it's commercial or residential.
    </p>

    <div>
      <form class="col-md-6 mx-auto">
        <!-- Input fields for mobile and desktop -->
        <div class="d-flex flex-column flex-md-row gap-4 mt-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            class="p-2 w-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            class="p-2 w-100"
          />
        </div>

        <div class="d-flex flex-column flex-md-row gap-4 mt-4">
          <input
            type="text"
            name="name"
            placeholder="Reason for Contacting"
            class="p-2 w-100"
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            class="p-2 w-100"
          />
        </div>

        <!-- Textarea and label -->
        <textarea
          placeholder="Message"
          class="w-100 mt-4 p-2"
          rows="6"
        ></textarea>

        <label class="py-2"
          ><span class="text-danger fw-bold">*</span>Indicates a required field
        </label>
        <br />

        <!-- Submit button -->
        <div class="d-flex justify-content-center">
          <button class="p-2 text-light bg-blue-dark submit-btn fw-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.submit-btn {
  width: 250px;
  padding: 16px 20px;
}

/* Make container responsive */
.container {
  max-width: 100%;
}

/* Adjust padding and margin for smaller screens */
@media (max-width: 768px) {
  .p-5 {
    padding: 2rem;
  }

  .container {
    width: 100%;
  }
}
</style>

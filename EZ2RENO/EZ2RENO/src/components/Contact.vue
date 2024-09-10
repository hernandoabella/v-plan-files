<script setup lang="ts"></script>

<template>
  <div class="p-5">
    <h3 class="text-center fw-bold">What can us do for you?</h3>
    <p class="text-center">
      We are ready to work on a project of any complexity, <br />
      whether it's commercial or residencial.
    </p>

    <div class="container w-50">
      <form>
        <div class="d-flex gap-4 mt-4">
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

        <div class="d-flex gap-4 mt-4">
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

        <textarea placeholder="Message" class="w-100 mt-4 p-2"></textarea>
        <label class="py-2"
          ><span class="text-danger fw-bold">*</span>Indicates a required
          field</label
        >
        <br />
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
  padding: 16px, 20px, 16px, 20px;
  width: 250px;
}
</style>

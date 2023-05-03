<template>
  <section class="home">
    <div className="home__content">
      <h1 class="home__title`">Home</h1>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.home {
  @apply flex items-start justify-center h-full my-8;
}

.home__content {
  @apply w-full md:w-9/12 mx-auto px-4 md:px-0;
}

.home__title {
  @apply text-center text-theme;
}
</style>

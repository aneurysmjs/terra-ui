<template>
  <footer className="footer">
    <section className="footer__copyright">
      {{ name }}
    </section>
  </footer>
</template>

<script lang="ts" setup>
const name = 'footer';
</script>

<style>
.footer {
  @apply bg-white bottom-0 left-0 border-gray-300 grid place-items-center w-full;
}

.footer__made-with {
  @apply text-2xl text-gray-600 mt-8;
}

.footer__content {
  @apply bottom-0 left-0 py-8 px-4 flex justify-evenly w-full;
}

.footer__img {
  @apply h-16 w-16 rounded-full;
}

.footer__copyright {
  @apply text-gray-800 text-center bg-gray-100 w-full p-5;
  @apply dark:bg-gray-800 dark:text-white;
}

.footer__author {
  @apply text-center;
}
</style>

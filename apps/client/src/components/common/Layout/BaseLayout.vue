<template>
  <main className="layout">
    <Navbar />
    <div className="layout__content">
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<script lang="ts" setup>
import Navbar from '@/components/common/Navbar/BaseNavbar.vue';
import Footer from '@/components/common/Footer/BaseFooter.vue';
</script>

<style>
.layout {
  @apply flex flex-col h-screen;
}

.layout__content {
  @apply grow mt-16;
}
</style>

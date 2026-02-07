<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#1a2339] py-6">
    <div class="text-xs-sm mx-auto px-6 text-center text-white/50 lg:container">
      <p>
        © {{ currentYear }} All rights reserved • Made with
        <span class="text-golden-yellow font-semibold">Vue.js</span> &
        <span class="text-golden-yellow font-semibold">Tailwind CSS</span>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/skills', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-sm">
    <nav class="mx-auto flex items-center justify-end px-4 py-4 sm:px-6 lg:px-8">
      <ul
        class="hidden space-x-8 text-sm font-medium text-white transition-all duration-200 sm:flex"
      >
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="hover:text-golden-yellow text-base-lg transition-colors"
            active-class="text-golden-yellow font-semibold"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <button
        class="focus:outline-none sm:hidden"
        @click="isOpen = !isOpen"
        aria-label="Toggle menu"
      >
        <div class="relative h-6 w-6">
          <Menu
            class="text-golden-yellow absolute inset-0 cursor-pointer transition-all duration-300"
            :class="isOpen ? 'opacity-60' : 'opacity-100'"
          />
        </div>
      </button>
    </nav>

    <div v-if="isOpen" class="bg-main-card absolute inset-x-0 top-full z-10 sm:hidden">
      <ul class="flex flex-col">
        <li v-for="(link, index) in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            @click="isOpen = false"
            class="hover:text-golden-yellow text-base-lg block p-4 transition-colors"
            active-class="text-golden-yellow font-semibold"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

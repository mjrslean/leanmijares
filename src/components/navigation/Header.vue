<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-sm">
    <nav class="mx-auto flex max-w-7xl items-center justify-end px-4 py-4 sm:px-6 lg:px-8">
      <ul
        class="hidden space-x-8 text-sm font-medium text-white transition-all duration-200 sm:flex"
      >
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" class="hover:text-golden-yellow transition-colors">{{
            link.label
          }}</a>
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
            :class="isOpen ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'"
          />
          <X
            class="text-golden-yellow absolute inset-0 cursor-pointer transition-all duration-300"
            :class="isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'"
          />
        </div>
      </button>
    </nav>
  </header>

  <transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="-translate-y-full"
    leave-active-class="transition-all duration-300 ease-in"
    leave-to-class="-translate-y-full"
  >
    <div v-if="isOpen" class="fixed top-[72px] right-0 left-0 z-40 sm:hidden">
      <ul class="border-golden-yellow bg-main-card border-t shadow-2xl">
        <li
          v-for="(link, index) in navLinks"
          :key="link.href"
          class="transform transition-all duration-300 ease-out"
          :class="isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'"
          :style="{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }"
        >
          <a
            :href="link.href"
            @click="isOpen = false"
            class="border-golden-yellow/20 hover:bg-golden-yellow/10 hover:text-golden-yellow block border-b px-6 py-4 text-white transition-all duration-200"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </transition>
</template>

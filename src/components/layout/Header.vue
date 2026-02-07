<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const navLinks = [
  { to: '/home', label: 'Home' },
  { to: '/skills', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-sm">
    <nav class="mx-auto flex items-center justify-end px-4 py-4 sm:px-6 lg:px-8">
      <ul class="hidden space-x-8 font-medium text-white transition-all duration-200 sm:flex">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="hover:text-golden-yellow text-sm-base transition-colors"
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
          <Icon
            icon="tabler:menu"
            class="text-golden-yellow absolute inset-0 size-6 cursor-pointer transition-all duration-300"
            :class="isOpen ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'"
          />
          <Icon
            icon="tabler:x"
            class="text-golden-yellow absolute inset-0 size-6 cursor-pointer transition-all duration-300"
            :class="isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'"
          />
        </div>
      </button>
    </nav>

    <Transition
      enter-active-class="animate-in fade-in slide-in-from-top-2 duration-300"
      leave-active-class="animate-out fade-out slide-out-to-top-2 duration-200"
    >
      <div v-if="isOpen" class="bg-main-card absolute inset-x-0 top-full z-10 sm:hidden">
        <ul class="flex flex-col">
          <li v-for="(link, index) in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              @click="isOpen = false"
              class="hover:text-golden-yellow text-base-lg block p-4 transition-colors"
              active-class="text-golden-yellow font-bold"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

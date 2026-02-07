<script setup>
import { Header } from '@/components/layout'
import { Home, Skills, Projects, Contact } from '@/components/section'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="min-h-screen cursor-default text-white/90">
    <Header />

    <main>
      <div
        class="bg-top-right bg-no-repeat sm:bg-[url('/images/Code.svg')] sm:bg-size-[400px_200px]"
      >
        <Home id="home" class="mt-8 mb-24" />
      </div>
      <div class="bg-start bg-[url('/images/Wave.svg')] bg-cover bg-no-repeat py-16 sm:py-20">
        <Skills id="skills" class="my-24" />
      </div>
      <Projects id="projects" class="my-24" />
      <div class="bg-[url('/images/Wave-2.svg')] bg-cover bg-center bg-no-repeat py-16 sm:py-20">
        <Contact id="contact" class="my-24" />
      </div>
      <Footer />
    </main>
  </div>
</template>

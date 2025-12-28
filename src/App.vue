<script setup>
import { Header } from '@/components/navigation'
import { Home, Skills, Projects, Contact } from '@/components/section'
</script>

<template>
  <div class="min-h-screen cursor-default text-white/90">
    <Header />

    <main class="space-y-16 sm:space-y-20 lg:space-y-28">
      <Home id="home" class="my-24" />
      <div class="bg-[url('/images/Wave.svg')] bg-cover bg-center bg-no-repeat py-16 sm:py-20">
        <Skills id="skills" class="my-24" />
      </div>
      <Projects id="projects" class="my-24" />
      <div class="bg-[url('/images/Wave-2.svg')] bg-cover bg-center bg-no-repeat py-16 sm:py-20">
        <Contact id="contact" class="my-24" />
      </div>
    </main>
  </div>
</template>

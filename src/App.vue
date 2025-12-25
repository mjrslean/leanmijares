<script setup>
import { Header } from '@/components/navigation'
import { Home, Skills, Projects, Contact } from '@/components/section'
</script>

<template>
  <div class="min-h-screen cursor-default text-white/90">
    <Header class="container mx-auto px-4"></Header>
    <main class="space-y-16 sm:space-y-20 lg:space-y-28">
      <Home id="home" class="container mx-auto mt-6 scroll-mt-20 px-4"></Home>
      <div class="bg-[url('/images/Wave.svg')] bg-cover bg-center bg-no-repeat py-16 sm:py-20">
        <Skills id="skills" class="scroll-mt-20"></Skills>
      </div>
      <Projects id="projects" class="scroll-mt-20" />
      <div class="bg-[url('/images/Wave-2.svg')] bg-cover bg-center bg-no-repeat py-16 sm:py-20">
        <Contact id="contact" class="scroll-mt-20" />
      </div>
    </main>
  </div>
</template>

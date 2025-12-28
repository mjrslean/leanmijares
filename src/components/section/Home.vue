<script setup>
import { Mail, Github, Linkedin, Download } from 'lucide-vue-next'
import { Experience } from '@/components/section'
</script>

<template>
  <div class="mx-auto my-12 flex flex-col gap-6 px-6 tracking-wide md:flex-row lg:container">
    <img class="ring-golden-yellow size-28 rounded-full ring-2" src="/images/Avatar.png" />

    <div class="flex flex-col space-y-10">
      <!--Social Platform Section-->
      <div class="flex flex-col">
        <h1 class="text-xl-2xl font-bold">Hi, I'm Lean</h1>
        <p class="text-sm-base text-sub-text font-semibold">Software Engineer</p>

        <div class="text-sub-text mt-4 flex items-center gap-4">
          <a href="mailto:mijareslean@gmail.com">
            <Mail class="size-5 hover:text-white/90" />
          </a>
          <a href="https://github.com/mjrslean" target="_blank">
            <Github class="size-5 hover:text-white/90" />
          </a>
          <a href="https://www.linkedin.com/in/lean-elizebette-mijares/" target="_blank">
            <Linkedin class="size-5 hover:text-white/90" />
          </a>
        </div>
      </div>

      <div class="text-sm-base space-y-8 leading-6 tracking-wide">
        <p>
          I'm a software engineer who enjoys building web applications. I work mostly with a modern
          stack like
          <label>
            <span class="text-golden-yellow font-semibold">Vue</span>,
            <span class="text-golden-yellow font-semibold">Laravel</span>, and
            <span class="text-golden-yellow font-semibold">Tailwind</span>,
          </label>
          but more than anything, I just love creating things that work well and look good. Outside
          of coding, I like to keep a beginner’s mindset — always open to new ideas, feedback, and
          inspiration wherever it comes from.
        </p>

        <!-- Experience Section -->
        <Experience />

        <!-- Resume -->
        <a
          href="https://drive.google.com/file/d/1pH2HLmwJYCsOThdcnioppH-JJ3uBaNth/view?usp=sharing"
          class="bg-golden-yellow inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold whitespace-nowrap"
        >
          Download my CV
          <Download class="size-5" />
        </a>
      </div>
    </div>
  </div>
</template>

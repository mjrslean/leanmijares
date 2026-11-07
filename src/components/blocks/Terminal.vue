<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const stack = [
  { key: 'role', value: 'Software Engineer' },
  { key: 'backend', value: 'Laravel · ASP.NET' },
  { key: 'frontend', value: 'Vue · Angular · Tailwind' },
  { key: 'database', value: 'MySQL' },
  { key: 'cloud', value: 'GCP · Vercel' },
]

const checks = ['build passing', 'tests passing', 'deployment healthy']

const step = ref(0)
let timer

onMounted(() => {
  timer = setInterval(() => (step.value = (step.value + 1) % 7), 1000)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <aside v-reveal aria-label="Terminal preview" class="lg:sticky lg:top-24">
    <div
      class="from-main-card/60 to-background overflow-hidden rounded-xl bg-gradient-to-b shadow-2xl shadow-black/50 backdrop-blur-sm"
    >
      <!-- Window bar -->
      <div class="bg-main-card relative flex items-center border-b border-white/4 px-4 py-2.5">
        <div class="flex items-center gap-2">
          <span class="size-3 rounded-full bg-[#FF5F57]/90"></span>
          <span class="size-3 rounded-full bg-[#FEBC2E]/90"></span>
          <span class="size-3 rounded-full bg-[#28C840]/90"></span>
        </div>
        <span
          class="text-sub-text pointer-events-none absolute inset-x-0 text-center font-mono text-[11px]"
        >
          lean — -zsh — 80×24
        </span>
      </div>

      <!-- Terminal body -->
      <div class="space-y-2 p-6 font-mono text-xs leading-relaxed sm:text-[13px]">
        <div class="flex items-center">
          <span class="text-golden-yellow">lean@portfolio</span>
          <span class="text-sub-text"> ~ </span>
          <span class="text-golden-yellow">%</span>
          <span class="text-foreground ml-1">whoami</span>
        </div>
        <p class="text-gray-400">Lean Mijares — Full-stack Developer</p>

        <div class="flex items-center pt-2">
          <span class="text-golden-yellow">lean@portfolio</span>
          <span class="text-sub-text"> ~ </span>
          <span class="text-golden-yellow">%</span>
          <span class="text-foreground ml-1">cat stack.json</span>
        </div>
        <div class="text-sub-text">
          <p>{</p>
          <p v-for="(item, index) in stack" :key="item.key" class="pl-4">
            <span class="text-gray-400">"{{ item.key }}"</span>:
            <span class="text-golden-yellow">"{{ item.value }}"</span
            ><span v-if="index < stack.length - 1">,</span>
          </p>
          <p>}</p>
        </div>

        <div class="flex items-center pt-2">
          <span class="text-golden-yellow">lean@portfolio</span>
          <span class="text-sub-text"> ~ </span>
          <span class="text-golden-yellow">%</span>
          <span class="text-foreground ml-1">./status --check</span>
        </div>

        <!-- Animated checks -->
        <div class="space-y-1">
          <p
            v-for="(check, i) in checks"
            :key="check"
            class="flex items-center gap-2 transition-opacity duration-500"
            :class="[i < step ? 'text-[#28C840]' : 'text-gray-400']"
          >
            <span class="inline-flex size-3.5 items-center justify-center">
              <span v-if="i < step" class="text-[#28C840]">✓</span>
              <span
                v-else-if="i === step"
                class="size-3 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"
              >
              </span>
              <span v-else class="size-1 rounded-full bg-gray-600"></span>
            </span>
            {{ check }}
          </p>
        </div>

        <div class="flex items-center pt-2">
          <span class="text-golden-yellow">lean@portfolio</span>
          <span class="text-sub-text"> ~ </span>
          <span class="text-golden-yellow">%</span>
        </div>
      </div>

      <!-- Walking cat -->
      <div class="bg-main-card/40 relative h-10 overflow-hidden border-t border-white/4">
        <div
          class="animate-cat-walk pointer-events-none absolute bottom-2 left-0 w-9 shrink-0 will-change-[left] motion-reduce:animate-none"
        >
          <img
            src="/graphics/pixel-cat.svg"
            aria-hidden="true"
            class="animate-cat-bob h-6 w-9 max-w-none [image-rendering:pixelated] motion-reduce:animate-none"
          />
        </div>
      </div>
    </div>
  </aside>
</template>

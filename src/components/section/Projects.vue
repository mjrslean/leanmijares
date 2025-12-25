<script setup>
const projects = [
  {
    title: 'iBMS Demosite',
    description: 'A quick walkthrough of iBMS highlighting key features and interface.',
    image: '/images/projects/demo-site.png',
    techStack: ['/images/logo/laravel.svg', '/images/logo/vue.svg', '/images/logo/tailwind.svg'],
  },
  {
    title: 'RFID, Fingerprint, And Keypad Based Door Lock With Alert System',
    description:
      'Three way security providing an immediate SMS notification to the homeowner when detecting intruders.',
    image: '/images/projects/three-way-security.png',
    techStack: ['/images/logo/cpp.svg', '/images/logo/arduino.svg', '/images/logo/twilio.svg'],
  },
  {
    title: 'Online Student Monitoring System with SMS',
    description:
      'Works to facilitate information tracking for both parents and administrators by coordinating scheduling and communications amongst faculty regarding students.',
    image: '/images/projects/student-monitoring.png',
    techStack: [
      '/images/logo/html5.svg',
      '/images/logo/css.svg',
      '/images/logo/bootstrap.svg',
      '/images/logo/java.svg',
      '/images/logo/mysql.svg',
    ],
  },
  {
    title: 'Smart-Home Automation and Environment Monitoring',
    description:
      'An Android-based home automation app designed to remotely control specific devices and monitor environmental conditions within the home and its surroundings.',
    image: '/images/projects/smart-home.png',
    techStack: [
      '/images/logo/react-native.svg',
      '/images/logo/arduino.svg',
      '/images/logo/raspberry-pi.svg',
      '/images/logo/firebase.svg',
    ],
  },
]
</script>

<template>
  <div class="container mx-auto px-4 sm:px-10">
    <div class="mb-6 space-y-2">
      <h1 class="text-golden-yellow text-2xl-3xl font-bold">Projects</h1>
      <p class="text-base-xl">
        These are the personal and professional projects that reflect my growth as a developer.
      </p>
    </div>
    <masonry-wall :items="projects" :ssr-columns="1" :column-width="280" :gap="16" class="my-10">
      <template #default="{ item }">
        <div class="bg-main-card rounded-lg shadow-lg">
          <div class="relative">
            <img :src="item.image" class="border-b-golden-yellow rounded-t-lg border-b-2" />
            <div class="absolute inset-0 rounded-t-lg bg-black/25"></div>
          </div>
          <div class="space-y-3 p-3">
            <div>
              <h2 class="mb-2 font-bold">{{ item.title }}</h2>
              <p class="text-sm text-gray-400">{{ item.description }}</p>
            </div>
            <div>
              <p class="mb-2 text-sm font-semibold">Tech Stacks</p>
              <div class="flex flex-wrap gap-2">
                <img
                  v-for="(tech, i) in item.techStack"
                  :key="i"
                  :src="tech"
                  class="size-5 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </masonry-wall>
  </div>
</template>

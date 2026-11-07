<script setup>
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Button from '@/components/ui/button/Button.vue'
import { ref } from 'vue'
import { Badge } from '@/components/ui/badge'

const showAllExperiences = ref(false)

const experiences = [
  {
    company: 'Freelance',
    type: 'freelance',
    positions: [
      {
        title: 'Embedded System Developer',
        hired: '2022-2023',
        duration: '1 year',
      },
    ],
    description:
      'Embedded systems developer with practical experience in microcontroller programming and IoT. In college, I freelanced on Arduino projects, building custom hardware solutions in C/C++ that connected sensors and actuators to real-world use cases. I like taking an idea from a rough prototype to something that works dependably.',
    technologies: ['Arduino', 'Microcontrollers', 'C/C++'],
  },
  {
    company: 'Tensei Philippines Inc.',
    type: 'internship',
    positions: [
      {
        title: 'Software Engineer Intern',
        hired: 'Mar 2023 - Aug 2023',
        duration: '6 months',
      },
    ],
    description:
      'Contributed to building a guided onboarding walkthrough for a company software product using Vue, Tailwind, and Shepherd.js, creating step-by-step tours that help new users learn the system quickly. I also helped debug and test components, working with the team to catch issues early and keep releases stable.',
    technologies: ['Software Development', 'Software Testing'],
  },
  {
    company: 'Tensei Philippines Inc.',
    type: 'full-time',
    positions: [
      {
        title: 'Junior Software Engineer',
        hired: 'Sept 2023 - June 2025',
        duration: '1 year 9 months',
      },
      {
        title: 'Senior Software Engineer',
        hired: 'June 2025 - Present',
        duration: 'Ongoing',
      },
    ],
    description:
      'Analyzed business requirements and designed, implemented, and delivered new features using the VILT stack (Vue, Inertia, Laravel, Tailwind). Deployed and managed scalable solutions on GCP and integrated IoT devices into the platform. Mentored and guided a team of developers through code reviews, knowledge sharing, and technical direction. Established engineering standards aligned with ISO to improve consistency, security, and maintainability. Collaborated with cross-functional teams and ensured software quality through thorough testing.',
    technologies: [
      'IoT Integration',
      'Software Design',
      'Software Testing',
      'Software Development & Maintenance',
      'Code Review',
      'Technical Documentation',
      'Process Improvement & Optimization',
    ],
  },
]

const isLastExperience = (index) => index === experiences.length - 1

const educations = [
  {
    school: 'Technological University of the Philippines',
    degree: 'Bachelor of Science in Information Technology',
    location: 'Manila, Philippines',
    period: '2019-2023',
    description:
      'Focused on web development, mobile development, and embedded programming. Completed projects involving robotics, hardware integration, and full-stack applications.',
  },
  {
    school: 'Polytechnic University of the Philippines',
    degree: 'Information and Communication Technology - TVL',
    location: 'Manila, Philippines',
    period: '2017-2019',
    description:
      'Focused on web development and programming fundamentals, building a strong foundation in core concepts like logic, data structures, and problem solving.',
  },
]
</script>

<template>
  <div class="relative w-fit pb-2">
    <h1 class="text-xl-2xl font-bold">About Me</h1>
    <div class="bg-golden-yellow absolute bottom-0 left-0 h-1 w-2/3 rounded-r-full"></div>
  </div>

  <p v-reveal class="text-sm-base leading-relaxed text-white/70">
    I'm a full-stack developer who enjoys building web applications. I work mostly with a modern
    stack like <span class="text-golden-yellow font-semibold">Laravel</span>,
    <span class="text-golden-yellow font-semibold">Vue</span>, and
    <span class="text-golden-yellow font-semibold">MySQL</span> — but more than anything, I just
    love creating things that work well and look good. Outside of coding, I like to keep a
    beginner's mindset — always open to new ideas, feedback, and inspiration wherever they come
    from.
  </p>

  <Tabs default-value="experience" class="mt-8 flex w-full flex-col">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="experience" class="gap-2">
        <Icon icon="tabler:briefcase" class="size-4" />
        <span>Experience</span>
      </TabsTrigger>
      <TabsTrigger value="education" class="gap-2">
        <Icon icon="tabler:school" class="size-4" />
        <span>Education</span>
      </TabsTrigger>
    </TabsList>

    <!-- Experience -->
    <TabsContent value="experience" class="mt-6 space-y-6">
      <template v-for="(experience, i) in experiences" :key="experience.company">
        <div
          v-reveal="{ delay: i * 100 }"
          class="relative transition-[max-height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          :class="
            isLastExperience(i)
              ? showAllExperiences
                ? 'max-h-[120rem] overflow-hidden mask-b-from-[100%]'
                : 'max-h-30 overflow-hidden mask-b-from-40%'
              : ''
          "
        >
          <Card
            class="overflow-hidden rounded-2xl border border-white/4 bg-gray-800/30 backdrop-blur-sm transition-colors hover:border-white/8"
          >
            <CardHeader class="pb-2">
              <!-- Company Name -->
              <div class="flex items-start justify-between gap-4">
                <h3 class="text-base-lg font-semibold text-white">{{ experience.company }}</h3>
                <Badge v-if="experience.type" variant="secondary" class="shrink-0 capitalize">
                  {{ experience.type }}
                </Badge>
              </div>

              <!-- Positions Timeline -->
              <div class="mt-4 space-y-4 border-l border-white/10 pl-4">
                <div
                  v-for="position in experience.positions"
                  :key="position.title"
                  class="relative flex flex-wrap items-center justify-between gap-2"
                >
                  <span
                    class="bg-golden-yellow absolute top-1/2 -left-[1.3125rem] size-2 rounded-full"
                  ></span>
                  <div class="space-y-0.5">
                    <p class="text-sm-base font-semibold text-white/90">
                      {{ position.title }}
                    </p>
                    <p v-if="position.duration" class="text-xs text-white/50">
                      {{ position.duration }}
                    </p>
                  </div>
                  <Badge variant="outline" class="text-xs whitespace-nowrap">
                    <Icon icon="tabler:calendar" class="mr-1 size-3" />
                    {{ position.hired }}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent class="space-y-4 pt-2">
              <!-- Description -->
              <p class="text-sm leading-relaxed text-white/60">
                {{ experience.description }}
              </p>

              <!-- Technologies -->
              <div class="space-y-2">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in experience.technologies"
                    :key="tech"
                    class="hover:border-golden-yellow/30 hover:bg-golden-yellow/10 inline-flex items-center rounded-full border border-white/4 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition-colors"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </template>

      <div class="flex justify-center pt-2">
        <Button
          type="button"
          class="bg-golden-yellow hover:bg-golden-yellow/90 text-primary-foreground rounded-full px-6 font-semibold"
          :aria-expanded="showAllExperiences"
          @click="showAllExperiences = !showAllExperiences"
        >
          <Icon
            :icon="showAllExperiences ? 'tabler:arrow-up' : 'tabler:arrow-down'"
            class="size-4"
          />
        </Button>
      </div>
    </TabsContent>

    <!-- Education -->
    <TabsContent value="education" class="mt-6 space-y-6">
      <template v-for="(education, i) in educations" :key="education.school">
        <Card
          v-reveal="{ delay: i * 100 }"
          class="overflow-hidden rounded-2xl border border-white/4 bg-gray-800/30 backdrop-blur-sm transition-colors hover:border-white/8"
        >
          <CardHeader class="pb-2">
            <div class="flex items-start justify-between gap-4">
              <h3 class="text-base-lg font-semibold text-white">{{ education.school }}</h3>
              <Badge variant="secondary" class="shrink-0 whitespace-nowrap">
                <Icon icon="tabler:certificate" class="mr-1 size-3" />
                {{ education.period }}
              </Badge>
            </div>
            <div class="mt-2">
              <p class="text-sm font-medium text-white/80">{{ education.degree }}</p>
              <p class="mt-1 flex items-center gap-1 text-xs text-white/50">
                <Icon icon="tabler:map-pin" class="size-3" />
                {{ education.location }}
              </p>
            </div>
          </CardHeader>

          <CardContent class="pt-2">
            <p class="text-sm leading-relaxed text-white/60">
              {{ education.description }}
            </p>
          </CardContent>
        </Card>
      </template>
    </TabsContent>
  </Tabs>
</template>

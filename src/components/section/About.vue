<script setup lang="ts">
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ref } from 'vue'
import { Badge } from '../ui/badge'

const experiences = ref([
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
      'Embedded Systems Developer with practical experience in microcontroller programming and IoT solutions. During college, I freelanced on Arduino-based projects, developing custom hardware solutions with sensor and actuator integration using C/C++ programming. ',
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
      'Contributed to the development of onboarding system using Vue and Tailwind. Assisted in debugging and testing software components, gaining hands-on experience in a collaborative development environment.',
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
      'Analyzed requirements and implemented new features using the VILT stack. Deployed and managed solutions on GCP, integrated IoT devices, collaborated with the team, and ensured software quality through thorough testing.',
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
])

const educations = ref([
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
      'Focused on web development and programming fundamentals. Built foundational skills in HTML, CSS, JavaScript, and core programming concepts.',
  },
])
</script>

<template>
  <div class="relative w-fit pb-2">
    <h1 class="text-xl-2xl font-bold">About Me</h1>
    <div class="bg-golden-yellow absolute bottom-0 left-0 h-1 w-2/3 rounded-r-full"></div>
  </div>

  <p>
    I'm a software engineer who enjoys building web applications. I work mostly with a modern stack
    like
    <label>
      <span class="text-golden-yellow font-semibold">Vue</span>,
      <span class="text-golden-yellow font-semibold">Laravel</span>, and
      <span class="text-golden-yellow font-semibold">Tailwind</span>,
    </label>
    but more than anything, I just love creating things that work well and look good. Outside of
    coding, I like to keep a beginner’s mindset — always open to new ideas, feedback, and
    inspiration wherever it comes from.
  </p>

  <div class="flex w-full flex-col gap-6">
    <Tabs default-value="experience">
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

      <TabsContent value="experience" class="mt-6 space-y-6">
        <template v-for="experience in experiences" :key="experience.company">
          <Card class="gap-4 overflow-hidden">
            <CardHeader>
              <!-- Company Name -->
              <div class="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 class="text-foreground text-base-lg font-semibold">
                    {{ experience.company }}
                  </h3>
                </div>
                <Badge v-if="experience.type" variant="secondary" class="capitalize">
                  {{ experience.type }}
                </Badge>
              </div>

              <!-- Positions Timeline -->
              <div class="space-y-2">
                <div
                  v-for="(position, index) in experience.positions"
                  :key="position.title"
                  class="bg-muted/30 flex flex-col gap-2 rounded-lg p-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div class="flex items-start gap-2">
                    <div>
                      <p class="text-foreground font-semibold">{{ position.title }}</p>
                      <p v-if="position.duration" class="text-muted-foreground text-xs">
                        {{ position.duration }}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    class="self-start text-xs whitespace-nowrap sm:self-center"
                  >
                    <Icon icon="tabler:calendar" class="mr-1 size-3" />
                    {{ position.hired }}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent class="space-y-4">
              <!-- Description -->
              <p class="text-muted-foreground text-sm leading-relaxed">
                {{ experience.description }}
              </p>

              <!-- Technologies -->
              <div class="space-y-3">
                <h4 class="text-foreground flex items-center gap-2 text-sm font-semibold">
                  <Icon icon="tabler:code" class="size-4" />
                  Technologies
                </h4>
                <div class="flex flex-wrap gap-2">
                  <Badge
                    v-for="tech in experience.technologies"
                    :key="tech"
                    variant="secondary"
                    class="hover:bg-golden-yellow hover:text-primary-foreground cursor-default px-3 py-1 text-xs font-medium transition-colors"
                  >
                    {{ tech }}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </template>
      </TabsContent>
      <TabsContent value="education" class="mt-6 space-y-6">
        <template v-for="education in educations" :key="education.school">
          <Card class="overflow-hidden">
            <CardHeader>
              <div class="flex items-start justify-between gap-4">
                <h3 class="text-foreground text-base-lg font-semibold">{{ education.school }}</h3>
                <Badge variant="secondary" class="capitalize">
                  <Icon icon="tabler:certificate" class="mr-1 size-3" />
                  {{ education.period }}
                </Badge>
              </div>
              <div>
                <p class="text-muted-foreground mt-1 text-sm font-medium">{{ education.degree }}</p>
                <p class="text-muted-foreground mt-1 flex items-center gap-1 text-sm">
                  <Icon icon="tabler:map-pin" class="size-3" />
                  {{ education.location }}
                </p>
              </div>
            </CardHeader>

            <CardContent>
              <p class="text-muted-foreground text-sm leading-relaxed">
                {{ education.description }}
              </p>
            </CardContent>
          </Card>
        </template>
      </TabsContent>
    </Tabs>
  </div>
</template>

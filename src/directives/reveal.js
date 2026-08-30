export const vReveal = {
  mounted(el, binding) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const delay = binding.value?.delay ?? 0

    el.classList.add('opacity-0')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        window.setTimeout(() => {
          el.classList.remove('opacity-0')
          el.classList.add(
            'animate-in',
            'fade-in',
            'slide-in-from-bottom-4',
            'duration-700',
            'fill-mode-both',
          )
        }, delay)

        observer.unobserve(el)
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
  },
}

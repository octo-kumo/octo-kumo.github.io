<template>
    <div id="portfolio">
        <LandingSpace v-model="progress" :sections="sections" @navigate="scrollToSection" />
        <LandingVerticalNav @navigate="scrollToSection" :sections="sections" :progress="progress" />
        <LandingHeroSection ref="hero" :progress="subprogress(progress, 0)" @navigate="scrollToSection" />
        <LandingAboutSection ref="about" />
        <LandingSkillsSection ref="skills" />
        <LandingWorkSection ref="work" />
        <LandingWriteupSection ref="writeups" />
        <LandingContactSection ref="contact" />
    </div>
</template>

<script setup lang="ts">
// import type { LandingHeroSection, WorkSection, WriteupSection, AboutSection, SkillsSection, ContactSection } from '#components';
definePageMeta({
  layout: 'clean',
  title: "Yun's Portfolio",
  description: "Welcome to my portfolio! My name is Yun, and I'm a software engineering student!"
});
const hero = ref<InstanceType<any> | null>(null)
const about = ref<InstanceType<any> | null>(null)
const skills = ref<InstanceType<any> | null>(null)
const work = ref<InstanceType<any> | null>(null)
const writeups = ref<InstanceType<any> | null>(null)
const contact = ref<InstanceType<any> | null>(null)
const progress = ref(0);

function subprogress(value: number, index: number) {
    return (value - index / (sections.length - 1)) * (sections.length - 1)
}

const sections = [
    {
        key: 'hero',
        value: hero,
        icon: '🛸',
        title: 'Home'
    },
    {
        key: 'about',
        value: about,
        icon: '🚀',
        title: 'About'
    },
    {
        key: 'skills',
        value: skills,
        icon: '💻',
        title: 'Skills'
    },
    {
        key: 'work',
        value: work,
        icon: '🪐',
        title: 'Work'
    },
    {
        key: 'writeups',
        value: writeups,
        icon: '📝',
        title: 'Writeups'
    },
    {
        key: 'contact',
        value: contact,
        icon: '📧',
        title: 'Contact'
    }
]

const scrollToSection = (section: string) => {
    let target: HTMLElement | undefined
    const targetSection = sections.find(s => s.key === section)
    if (targetSection) {
        target = targetSection.value?.value?.$el
    }
    if (target) {
        target.scrollIntoView({ behavior: "smooth" })
    }
}
</script>

<style>
:root {
    color-scheme: dark;
}

#portfolio {
    color: #fff;
    overflow-x: hidden;
}

html {
    background-color: #000;
}

html,
body,
#app {
    /* background-color: #000; */
    --font: 'Space Grotesk'!important;
    margin: 0;
    padding: 0;
    font-family: 'Space Grotesk', sans-serif!important;
}

* {
    font-family: 'Space Grotesk', sans-serif!important;
}

.fade-in {
    opacity: 0;
    animation: fade-in 1s ease-in-out forwards;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
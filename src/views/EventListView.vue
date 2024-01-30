<script setup>
import EventCard from '@/components/EventCard.vue';

import { ref } from 'vue';

const events = ref([
  {
    id: 598101,
    category: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find you new felinf freta eatt',
    location: 'huset',
    date: 'January 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Lyadee',
  },
  {
    id: 847382,
    category: 'food',
    title: 'Gratis mat',
    description: 'Spis masse mat :)',
    location: 'Coop Mega',
    date: 'January 30, 2022',
    time: '08:00',
    petsAllowed: false,
    organizer: 'Rema',
  },
  {
    id: 483756,
    category: 'sustainability',
    title: 'jakt på apekatt',
    description: 'gå ut i skog og jakt apekatt, helts ikke drep den han kan bli venn',
    location: 'Skogen',
    date: 'March 15, 2022',
    time: '16:40',
    petsAllowed: true,
    organizer: 'AntiApekattAlliansen',
  },
])
</script>
<template>
<h1>Events for god</h1>
  <div class="events">
    <EventCard 
    v-for="event in events"
    :key="event.id"
    :event="event"
    />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

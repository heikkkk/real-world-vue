<script setup>
import { ref, onMounted, computed, defineProps } from 'vue';
import EventService from '@/services/EventService.js'

const event = ref(null)
const props = defineProps(['id'])
const id = computed(() => props.id)

onMounted(() => {
  EventService.getEvent(id.value)
  .then((response) => {
      event.value = response.data
    }
  )
  .catch((error) => {
    console.log(error)
  })
})
</script>

<template>
    <div v-if="event">
    <h1>{{ event.title }}</h1>
      <div id="nav">
        <RouterLink :to="{ name: 'event-details' }">Details</RouterLink>
        |
        <RouterLink :to="{ name: 'event-register' }">Register</RouterLink>
        |
        <RouterLink :to="{ name: 'event-edit' }">Edit</RouterLink>
      </div>
      <RouterView :event="event"/>
    </div>
</template>

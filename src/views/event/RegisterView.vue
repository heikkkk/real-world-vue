<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['event'])
const router = useRouter()

const register = () => {
    router.push({
        name: 'event-details'
    })

}
</script>

<template>  
  <p>Regster for the event </p>
  <button @click="register">Register Me!</button>
</template>

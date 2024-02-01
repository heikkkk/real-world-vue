<script setup>

defineProps({
    resource: {
        type: String,
        required: true,
        default: 'siden'
    }
})
</script>

<template>
    <h1>Oisann!</h1>
    <h3>Ser ikkje ut som at {{ resource }} finnast</h3>
    <RouterLink :to="{ name: 'event-list' }">Tilbake til hjemmesiden</RouterLink>
</template>
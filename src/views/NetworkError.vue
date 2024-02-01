<template>
    <div class="networkError">
        <h1>Uh-Oh! Spaghettio</h1>
        
        <h3>
            Det ser ut som at du har noen nettverksfeil, 
            dette må du få ordna opp i. Kan jo prøve å 
            <a href="#" @click="$router.go(-1)">trykke her</a> 
            for å gi det et nytt forsøk.
        </h3>
    </div>
</template>
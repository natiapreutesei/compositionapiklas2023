<script setup>
import {useConcertObject} from "@/useConcert.js";
const refs = useConcertObject();


</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <div>How much: {{ refs.amount.value }}</div>
      <button @click="refs.increment" class="btn btn-warning">&#10133;</button>
    </div>
    <ul class="list-group">
      <span class="">Deelnemers:</span>
      <li class="list-group-item" v-for="deelnemer in refs.deelnemers.value" :key="deelnemer">{{ deelnemer }}</li>
    </ul>
    <p>Places left: {{ refs.places }} out of {{ refs.amount.value }}</p></div>
</template>

<style scoped>

</style>

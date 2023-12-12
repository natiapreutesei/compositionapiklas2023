<script setup>
import {useConcertObject} from "@/useConcert.js";
const newObject = useConcertObject();
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <div>How much: {{ newObject.amount.value }}</div>
      <button @click="newObject.increment" class="btn btn-warning">&#10133;</button>
    </div>
    <ul class="list-group">
      <span class="fw-bold">Deelnemers:</span>
      <li class="list-group-item text-center" v-for="deelnemer in newObject.deelnemers.value" :key="deelnemer">{{ deelnemer }}</li>
    </ul>
    <p>Places left: {{ newObject.places }} out of {{ newObject.amount.value }}</p></div>
</template>

<style scoped>

</style>
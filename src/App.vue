<script setup>

import OptionsApi from "@/components/OptionsApi.vue";
import CompositionApi from "@/components/CompositionApi.vue";
import AnderComponent from "@/components/AnderComponent.vue";
</script>

<template>
  <div class="container row col-md-6 offset-md-3 mt-5">
    <h1 class="text-center">Composition vs Options API</h1>
    <hr>
    <h2 class="text-center">Data</h2>
    <hr>
    <h3>OptionsAPI - Syntax</h3>
    <options-api/>
    <hr>
    <h3>CompositionAPI - Syntax</h3>
    <composition-api/>
    <hr>
    <h3>Other Component</h3>
    <ander-component/>
    <teleport to="#externalhtml">
      Deze piece wordt in externe html geplaatst

    </teleport>
    <hr>
    <h3>Vervolg</h3>
  </div>
</template>

<style scoped>
</style>

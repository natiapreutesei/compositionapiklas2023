<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <div>Amount: {{ amount }}</div>
      <button @click="increment" class="btn btn-danger">&#10133;</button>
    </div>
    <ul class="list-group">
      <span class="fw-bold">Deelnemers:</span>
      <li class="list-group-item text-center" v-for="deelnemer in deelnemers" :key="deelnemer">{{ deelnemer }}</li>
    </ul>
    <p>Places left: {{ places }} out of {{ amount }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 5,
      deelnemers: ["Jeroen", "Joris", "Marieke"]
    };
  },
  methods: {
    increment() {
      this.amount++;
    },
  },
  computed: {
    places() {
      return this.amount - this.deelnemers.length;
    },
  },
};
</script>

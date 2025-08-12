<script setup>
import { ref } from "vue";

const showDialog = ref(false);
</script>

<template>
  <q-page padding class="flex flex-center">
    <q-circular-progress
      :value="100"
      :min="0"
      :max="200"
      size="100px"
      color="cyan"
      center-color="cyan-1"
      track-color="cyan-2"
      show-value=""
    >
      <q-chip :label="100" text-color="white" color="cyan" />
    </q-circular-progress>
  </q-page>
</template>

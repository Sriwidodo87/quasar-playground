<script setup>
import { mdiMicrosoft } from "@quasar/extras/mdi-v7";
import { ref } from "vue";

const loggIn = ref(false);
</script>

<template>
  <router-view v-if="loggIn" />

  <div
    style="height: 100vh"
    class="flex flex-center"
  >
    <q-btn
      label="Login"
      :icon="mdiMicrosoft"
      color="blue"
      @click="loggIn = true"
    />
  </div>
</template>

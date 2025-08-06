<script setup>
import { mdiMicrosoft } from "@quasar/extras/mdi-v7";

import { useMsal } from "./stores/useMsal";

const msal = useMsal();
</script>

<template>
  <router-view v-if="msal.loggedIn" />

  <div
    style="height: 100vh"
    class="flex flex-center"
  >
    <q-btn
      label="Login"
      :icon="mdiMicrosoft"
      color="blue"
      @click="msal.login()"
    />
  </div>
</template>

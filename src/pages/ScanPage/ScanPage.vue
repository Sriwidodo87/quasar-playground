<script setup>
import { useBluetoothScanner } from "src/composables/useBluetoothScanner";
import { mdiRefresh } from "@quasar/extras/mdi-v7";
const { scan, scanResults, scanning } = useBluetoothScanner();
</script>

<template>
  <q-page padding>
    <q-card>
      <q-toolbar class="bg-secondary text-white">
        <q-toolbar-title> Scan For Friends </q-toolbar-title>
        <q-btn
          :loading="scanning"
          round
          color="white"
          text-color="grey-10"
          size="sm"
          :icon="mdiRefresh"
          @click="scan()"
        />
      </q-toolbar>

      <q-list>
        <pre>{{ scanResults }}</pre>
      </q-list>
    </q-card>
  </q-page>
</template>

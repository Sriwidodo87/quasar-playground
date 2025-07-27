<script setup>
import { BleClient } from '@capacitor-community/bluetooth-le';
import {ref} from 'vue';
const scanResults = ref([])

async function scan () {
  await	BleClient.initialize()

  await 	BleClient.requestLEScan(
    {},
    result =>{
      scanResults.value.push(result)
      }
  )
}

scan()
</script>



<template>
  <q-page padding>
    <pre>{{ scanResults }}</pre>
  </q-page>
</template>

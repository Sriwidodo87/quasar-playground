<script setup>
import { Geolocation } from "@capacitor/geolocation";
import { ref } from "vue";

const coordsQuery = ref('')
async function getCurrentLocation() {

  await Geolocation.checkPermissions()

  const position = await getCurrentLocation()

  position.coords.latitude = -25.3492
  position.coords.longitude = 131.0346

  coordsQuery.value =`${position.coords.latitude},${position.coords.longitude}`

  console.log(position)


}
</script>
<template>
  <q-page>
    <q-btn
      label="Get Current Geolocation"
      @click="getCurrentLocation()"
    />
    <q-btn
      :icon="mdiMap"
      color="red"
      tag="a"
      :href="`https://google.com/maps/search/?api=1&query=${coordsQuery}`"
    />
  </q-page>
</template>

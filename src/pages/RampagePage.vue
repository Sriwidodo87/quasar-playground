<script setup>

import { ref } from 'vue'

const showDialog = ref(false)



</script>


<template>
  <q-page
    padding
    class="flex flex-center"
  >
    <q-btn
      label="Show dialog"

      @click="showDialog = true"
    />
    <q-dialog v-model="showDialog">
      <div class="column">
        <q-card class="q-mb-md">
          <q-card-section>
            <h1>Title</h1>
          </q-card-section>
        </q-card>
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla asperiores velit aliquid dolorem magnam quas quisquam temporibus distinctio facilis ab repellat, enim perspiciatis officiis? Natus obcaecati laboriosam earum repellendus?
          </q-card-section>
        </q-card>
      </div>
    </q-dialog>
  </q-page>
</template>

<script setup>
import {
  mdiBook,
  mdiEmail,
  mdiFileDocument,
  mdiPlus,
  mdiInformationBoxOutline,
} from "@quasar/extras/mdi-v7";
import { ref } from "vue";

const showDialog = ref(false);
</script>

<template>
  <q-page padding class="row justify-center item-start q-gutter-lg">
    <q-intersection
      v-for="index in 400"
      :key="index"
      style="width: 200px; height: 300px"
      transition="scale"
    >
      <img src="https://picsum.photos/id/237/200/300" />
    </q-intersection>
    <!-- <q-circular-progress
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
    </q-circular-progress> -->

    <!-- <q-page-sticky position="bottom-right" :offset="[28, 28]">
      <q-fab :icon="mdiPlus" color="primary" fab direction="up">
        <q-fab-action
          :icon="mdiEmail"
          color="blue"
          external-label
          label="Email"
          label-position="left"
        />
        <q-fab-action
          :icon="mdiFileDocument"
          color="grey"
          external-label
          label="Document"
          label-position="left"
        />
        <q-fab-action
          :icon="mdiBook"
          color="black"
          external-label
          label="Book"
          label-position="left"
        />
      </q-fab>
    </q-page-sticky> -->

    <!-- <q-spinner-hearts color="primary" size="xl" /> -->
    <!-- <q-banner class="bg-secondary text-white">
      <template #avatar>
        <q-avatar color="white" text-color="grey-10" :icon="mdiInformationBoxOutline" />
      </template>
      We can't save uur friend until you sign in ...
      <template #action>
        <q-btn label="Sign In" color="white" text-color="grey-10" />
        <q-btn label="Dismiss" flat color="white" text-color="grey-10" />
      </template>
    </q-banner> -->
    <!-- <q-card>
      <q-card-section>
        <h5>Title</h5>
        <q-separator color="blue" size="4px" />
      </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem
        consequatur maiores. Cupiditate, adipisci vero exercitationem ipsum distinctio
        possimus ea laboriosam incidunt perferendis vitae dignissimos quod quo eos cum
        similique.
      </q-card-section>
    </q-card> -->
  </q-page>
</template>

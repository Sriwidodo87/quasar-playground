<script setup>
import { mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize } from '@quasar/extras/mdi-v7';


</script>
<template>
  <q-layout view="hHh LpR fFf">
    <q-header
      elevated
      class="bg-primary text-white"
    >
      <q-bar>
        Myapp
        <q-space />
        <q-btn
          size="sm"
          :icon="mdiWindowMinimize"
          flat
          dense
        />
        <q-btn
          size="sm"
          :icon="mdiWindowMaximize"
          flat
          dense
        />
        <q-btn
          size="sm"
          :icon="mdiWindowClose"
          flat
          dense
        />
      </q-bar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

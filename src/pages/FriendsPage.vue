<script setup>
defineProps({
  friendsListId:{
    required: true,
    type: String
  }
})
</script>

<template>
  <q-page padding>
    Friends Page : {{ friendsListId }}
  </q-page>
</template>

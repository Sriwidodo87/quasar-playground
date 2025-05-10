<script setup>
import { useLocalStorage } from "@vueuse/core";
import {
  mdiHuman,
  mdiDog,
  mdiMicrosoft,
  mdiApple,
  mdiLinux,
} from "@quasar/extras/mdi-v7";
const friends = useLocalStorage("friends", {});

const osDetaislMap = {
  Windows: {
    label: "Windows",
    icon: mdiMicrosoft,
    color: "blue",
  },
  Mac: {
    label: "MacOs",
    icon: mdiApple,
    color: "grey",
  },
  Linux: {
    label: "Linux",
    icon: mdiLinux,
    color: "black",
  },
};
</script>

<template>
  <q-page>
    <q-list
      separator
      bordered
    >
      <q-item
        v-for="friend in friends"
        :key="friend.id"
        :style="{ borderLeft: `6px solid ${friend.color}` }"
      >
        <q-item-section avatar>
          <q-avatar
            class="text-white"
            :style="{ backgroundColor: friend.color }"
          >
            {{ friend.name[0] }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{ friend.name }}
          </q-item-label>
          <q-item-label caption>
            {{ friend.email }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div>
            <q-chip
              :label="osDetaislMap[friend.operating_system].label"
              :icon="osDetaislMap[friend.operating_system].icon"
              :color="osDetaislMap[friend.operating_system].color"
              text-color="white"
            />
            <q-icon :name="friend.is_human ? mdiHuman : mdiDog" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <pre>{{ Object.values(friends) }}</pre>
  </q-page>
</template>

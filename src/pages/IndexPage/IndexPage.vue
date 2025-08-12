<script setup>
import { ref } from "vue";
// import { friends } from './friends';
import { useLocalStorage } from "@vueuse/core";
import { Notify, uid, Dialog, Loading } from "quasar";
import { mdiPlus } from "@quasar/extras/mdi-v7";
import CreateFriendDialog from "./CreateFriendDialog.vue";
import wretch from "wretch";
// import { api } from "src/boot/wretch";
import { api } from "src/boot/axios";
import { useI18n } from "vue-i18n";
import isEmail from "validator/lib/isEmail";

const friends = useLocalStorage("friends", {});
const form = ref({
  name: "Alexander",
  email: "alex@example.com",
  age: 38,
  is_human: true,
  operating_system: "Linux",
});

const { locale } = useI18n();
locale.value = "de";

function createFriend() {
  Dialog.create({
    title: "Are You Sure ?",
    message: `${form.value.name} Really Your Friend ?`,
    ok: { label: "Yea, For sure!" },
    cancel: { label: "Hmm,I'll think on it ....", flat: true },
  })
    .onOk(() => {
      Loading.show();

      setTimeout(() => {
        let id = uid();
        form.value.id = uid;
        friends.value[id] = form.value;
        showCreateDialog.value = false;
        form.value = {};

        Loading.hide();

        Notify.create({
          message: "Friend Created",
          icon: mdiPlus,
          color: "positive",
        });
      }, 5_000);
    })
    .onCancel(() => {
      showCreateDialog.value = false;
    });
}

const showCreateDialog = ref(false);
function fetchPosts() {
  api.get("posts");
}

defineOptions({
  methods: {
    fetchPosts2() {
      this.$axios.get("https://jsonplaceholder.typicode.com/posts");
    },
  },
});

function fetchPosts3() {
  api.get("posts");
}

// window.notification.show({
//   title: " Hello Vue School",
//   body: "Nice To meeey You Inside",
// });

// const notification = new Notification("Hello Vue Scholl", {

//   body: "Nice To meeey You Inside",
// });
</script>

<template>
  <q-page class="row q-col-gutter-xl">
    <!-- <q-btn"
        label="Posts"
        @click="fetchPosts()"
      />
      <q-btn @click="fetchPosts2()">
        AXIOS
      </q-btn>
      <q-btn @click="fetchPosts3()">
        AXIOS 3
      </q-btn> -->
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div class="col-xs-12 col-sm-6 col-lg-4">
      <q-select
        v-model="locale"
        :options="['en-US', 'de']"
        label="language"
        filled
        class="ma-lg"
      />

      <q-table
        :columns="columns"
        :rows="Object.values(friends)"
        :title="$t('friends.tableTitle')"
      >
        <template #top-right>
          <q-btn
            :icon="mdiPlus"
            round
            color="primary"
            @click="showCreateDialog = true"
          />
        </template>
      </q-table>
    </div>

    <!-- <div class="col-12">
      <div
        class="q-pa-lg q-ma-xl shadow-3 rounded-borders relative-position some-card scroll"
        style="height: 400px"
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam
          tempora esse amet maiores placeat voluptatibus reprehenderit, facere
          numquam cumque saepe aperiam minima exercitationem nostrum nisi
          delectus. Eos, enim recusandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt magnam tempora esse amet maiores placeat
          voluptatibus reprehenderit, facere numquam cumque saepe aperiam minima
          exercitationem nostrum nisi delectus. Eos, enim recusandae. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam tempora
          esse amet maiores placeat voluptatibus reprehenderit, facere numquam
          cumque saepe aperiam minima exercitationem nostrum nisi delectus. Eos,
          enim recusandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt magnam tempora esse amet maiores placeat voluptatibus
          reprehenderit, facere numquam cumque saepe aperiam minima
          exercitationem nostrum nisi delectus. Eos, enim recusandae. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam tempora
          esse amet maiores placeat voluptatibus reprehenderit, facere numquam
          cumque saepe aperiam minima exercitationem nostrum nisi delectus. Eos,
          enim recusandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt magnam tempora esse amet maiores placeat voluptatibus
          reprehenderit, facere numquam cumque saepe aperiam minima
          exercitationem nostrum nisi delectus. Eos, enim recusandae. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam tempora
          esse amet maiores placeat voluptatibus reprehenderit, facere numquam
          cumque saepe aperiam minima exercitationem nostrum nisi delectus. Eos,
          enim recusandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt magnam tempora esse amet maiores placeat voluptatibus
          reprehenderit, facere numquam cumque saepe aperiam minima
          exercitationem nostrum nisi delectus. Eos, enim recusandae. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam tempora
          esse amet maiores placeat voluptatibus reprehenderit, facere numquam
          cumque saepe aperiam minima exercitationem nostrum nisi delectus. Eos,
          enim recusandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt magnam tempora esse amet maiores placeat voluptatibus
          reprehenderit, facere numquam cumque saepe aperiam minima
          exercitationem nostrum nisi delectus. Eos, enim recusandae. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam tempora
          esse amet maiores placeat voluptatibus reprehenderit, facere numquam
          cumque saepe aperiam minima exercitationem nostrum nisi delectus. Eos,
          enim recusandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt magnam tempora esse amet maiores placeat voluptatibus
          reprehenderit, facere numquam cumque saepe aperiam minima
          exercitationem nostrum nisi delectus. Eos, enim recusandae. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam tempora
          esse amet maiores placeat voluptatibus reprehenderit, facere numquam
          cumque saepe aperiam minima exercitationem nostrum nisi delectus. Eos,
          enim recusandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt magnam tempora esse amet maiores placeat voluptatibus
          reprehenderit, facere numquam cumque saepe aperiam minima
          exercitationem nostrum nisi delectus. Eos, enim recusandae. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam tempora
          esse amet maiores placeat voluptatibus reprehenderit, facere numquam
          cumque saepe aperiam minima exercitationem nostrum nisi delectus. Eos,
          enim recusandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt magnam tempora esse amet maiores placeat voluptatibus
          reprehenderit, facere numquam cumque saepe aperiam minima
          exercitationem nostrum nisi delectus. Eos, enim recusandae.
        </div>
        <q-btn fab :icon="mdiPlus" color="blue" class="full-width" />
      </div>
    </div> -->

    <CreateFriendDialog
      v-model="showCreateDialog"
      v-model:form="form"
      @create="createFriend()"
    />
  </q-page>
</template>
<style lang="scss">
.mobile .some-card {
  background-color: rebeccapurple;
}
</style>

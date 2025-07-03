<script setup>
import { ref } from "vue";
// import { friends } from './friends';
import { useLocalStorage } from "@vueuse/core";
import { uid } from "quasar";
import { mdiPlus } from "@quasar/extras/mdi-v7";
import CreateFriendDialog from "./CreateFriendDialog.vue";
// import wretch from "wretch";
// import { api } from "src/boot/wretch";
// import { api } from "src/boot/axios";
import { useI18n } from 'vue-i18n';
const friends = useLocalStorage("friends", {});

const form = ref({});

const {locale} = useI18n();
locale.value='de';



function createFriend() {
  let id = uid();
  form.value.id = uid;
  friends.value[id] = form.value;
  showCreateDialog.value = false;
}

// const  {locale}  = useI18n()
// locale.value='de'

const showCreateDialog = ref(false);
// function fetchPosts() {
//   api.get("posts");
// }

// defineOptions({
//  methods:{
//    fetchPosts2() {
//   this.$axios.get('https://jsonplaceholder.typicode.com/posts')
//  }

//  }
// })

// function fetchPosts3(){
//   api.get("posts")
// }



</script>

<template>
  <q-page class="row q-col-gutter-xl">
    <div class="col-xs-12 col-sm-6 col-lg-4">
      <q-select
        v-model="locale"
        :options="['en-US','de']"
      />
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

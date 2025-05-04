<script setup>
import { ref } from 'vue';
// import { friends } from './friends';
import {useLocalStorage} from "@vueuse/core";
import { uid } from 'quasar';
import {mdiPlus} from '@quasar/extras/mdi-v7';
// import  createFriendDialog  from "./createFriendDialog.vue";



const friends =  useLocalStorage('friends',{})

const columns =[
  {name:'name',
    field:'name',
    label:'Name',
    align:"left",
    sortable:true
  },
  {name:'email',
    field:'email',
    label:'Email',
    align:"left"
  },
]
const form = ref({})
const showCreateDialog = ref(false)

function createFriend(){
  const id =uid()
  form.value.id = id
  friends.value[id] = form.value
  showCreateDialog.value = false
}


</script>
<template>
  <q-page class="row flex-center">
    <q-table
      :columns
      :rows="Object.values(friends)"
      title="Friends"
    >
      <template #top-right>
        <q-btn
          :icon="mdiPlus"
          round
          color="primary"
          @click="showCreateDialog= true"
        />
      </template>
    </q-table>

    <!-- <CreateFriendDialog
      v-model:dialog="showCreateDialog"
      v-model:form="form"
      @create="createFriend()"
    /> -->
    <q-dialog v-model="showCreateDialog">
      <q-card>
        <q-card-section>
          <q-form
            class="q-gutter-y-md"
            @submit="emit('create')"
          >
            <!-- name: text input -->
            <q-input
              v-model="form.name"
              label="Name"
              filled
            />
            <!-- email:text input -->
            <q-input
              v-model="form.email"
              label="Email"
              filled
            />
            <!-- age: input -->
            <q-input
              v-model="form.age"
              label="Age"
              type="number"
              filled
            />
            <!-- isHuman:checkbok -->
            <q-checkbox
              v-model="form.is_human"
              label="Is.Human"
            />
            <!-- Operatform.ing System: select: -->
            <q-select
              v-model="form.operating_system"
              outlined
              :options="['Windows','Mac','Linux']"
            />
            <!-- color:form. picker> -->
            <q-color
              v-model="form.color"
            />
            <!-- create button: -->
            <q-btn
              label="Create"
              color="primary"
              class="full-width"
              type="submit"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

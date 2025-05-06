<script setup>
import { ref } from "vue";

const form = defineModel("form", { type: Object });
const emit = defineEmits(["create"]); // mengacu pada createFriendDialog

const errors = ref({});

function giveMeErrors() {
  errors.value = {
    name: ["Name must be at least 3 character"],
  };
}
</script>
<template>
  <q-dialog>
    <q-card>
      <q-btn @click="giveMeErrors()"> Give Me Errors </q-btn>

      <q-card-section>
        <q-form class="q-gutter-y-md" @submit="emit('create')">
          <!-- name: text input -->
          <q-input
            v-model="form.name"
            label="Name"
            filled
            :error="!!errors.name?.length"
            :error-message="errors.name?.join(', ')"
          />
          <!-- email:text input -->
          <q-input v-model="form.email" label="Email" filled />
          <!-- age: input -->
          <q-input v-model="form.age" label="Age" type="number" filled />
          <!-- isHuman:checkbok -->
          <q-checkbox v-model="form.is_human" label="Is.Human" />
          <!-- Operatform.ing System: select: -->
          <q-select
            v-model="form.operating_system"
            outlined
            :options="['Windows', 'Mac', 'Linux']"
          />
          <!-- color:form. picker> -->
          <q-color v-model="form.color" />

          <!-- create button: -->
          <q-btn label="Create" color="primary" class="full-width" type="submit" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import { isEmail } from "validator";

const form = defineModel("form", { type: Object });
const emit = defineEmits(["create"]); // mengacu pada createFriendDialog

const errors = ref({});
const formComponent = ref();

async function submitForm() {
  const isValid = await formComponent.value.validate();
  if (isValid) {
    emit("create");
  }
}
</script>
<template>
  <q-dialog>
    <q-card>
      <q-card-section>
        <q-form ref="formComponent" class="q-gutter-y-md" @submit="emit('create')">
          <!-- name: text input -->
          <q-input
            v-model="form.name"
            label="Name"
            filled
            lazy-rules
            :rules="[
              (val) => val?.length > 2 || 'Name must be at least 3 chararcter log',
            ]"
          />
          <!-- email:text input -->
          <q-input
            v-model="form.email"
            label="Email"
            filled
            lazy-rules
            :rules="[(val) => isEmail(val ?? '') || 'Please eneter a valid email']"
          />
          <!-- age: input -->
          <q-input v-model="form.age" label="Age" type="number" filled />
          <!-- isHuman:checkbok -->
          <q-checkbox v-model="form.is_human" label="Is.Human" />
          <!-- Operatform.ing System: select: -->
          <q-select
            v-model="form.operating_system"
            outlined
            :rules="[
              (val) => ['Windows', 'Mac', 'Linux'].includes(val) || 'Please select OS',
            ]"
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

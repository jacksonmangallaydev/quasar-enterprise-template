<template>
  <q-dialog v-bind="{ ...attrs }" position="standard" persistent>
    <q-card class="app-modal">
      <!-- Dialog Header -->
      <q-card-section class="bg-primary text-white q-py-md headerTitle">
        <div class="row">
          <div class="col">
            <span class="text-h6">{{ label }}</span>
          </div>
        </div>
      </q-card-section>

      <!-- Dialog Content -->
      <q-card-section class="q-my-none scroll hoc-app-dialog">
        <slot></slot>
      </q-card-section>

      <q-separator />

      <!-- Dialog Actions -->
      <q-card-actions align="right">
        <q-btn
          color="primary"
          label="Create"
          no-caps
          @click="emit('create')"
          v-if="createBtn"
        />
        <q-btn
          color="primary"
          label="Save Changes"
          no-caps
          @click="emit('update')"
          v-else-if="updateBtn"
        />
        <q-btn
          color="primary"
          outline
          :label="isForm ? 'Cancel' : 'Close'"
          no-caps
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';

withDefaults(
  defineProps<{
    label?: string;
  }>(),
  {
    label: 'Dialog Header',
  }
);

const attrs = useAttrs();
const emit = defineEmits(['update', 'create']);
const createBtn = computed(() => attrs.hasOwnProperty('create'));
const updateBtn = computed(() => attrs.hasOwnProperty('update'));
const isForm = computed(
  () => attrs.hasOwnProperty('create') || attrs.hasOwnProperty('update')
);
</script>

<style scoped></style>

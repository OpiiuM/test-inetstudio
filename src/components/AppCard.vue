<script setup>
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import { getFullAddress } from '@/common/composables';

defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Card class="app-card">
    <template #header>
      <Avatar
        v-tooltip="getFullAddress(card.country.name, card.address)"
        :image="card.avatar"
        size="large"
        shape="circle"
      />
    </template>
    <template #title>
      <div v-html="card.title" />
    </template>
    <template #subtitle>
      <div v-html="card.subtitle" />
    </template>
    <template #content>
      <p>Scores: {{ card.score }}</p>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.app-card {
  display: flex;

  padding: 8px;

  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
              0 1px 1px 0 rgba(0, 0, 0, 0.14),
              0 1px 3px 0 rgba(0, 0, 0, 0.42);

  :deep(.p-card-header) {
    flex-shrink: 0;

    margin-right: 16px;
  }

  :deep(.p-card-body) {
    flex-grow: 1;

    padding: 0;
  }

  :deep(.p-card-content p) {
    margin: 0;
  }
}
</style>

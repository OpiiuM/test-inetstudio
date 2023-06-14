<script setup>
import { storeToRefs } from 'pinia';
import Dropdown from 'primevue/dropdown';
import { scores } from '@/common/constants';
import { useUsersStore } from '@/stores/users';
import { useFilterStore } from '@/stores/filter';

const usersStore = useUsersStore();
const filterStore = useFilterStore();

const { country, score } = storeToRefs(filterStore);
</script>

<template>
  <div class="filters">
    <div class="filters__item">
      <Dropdown
        v-model="country"
        :options="usersStore.getCountries"
        showClear
        optionLabel="name"
        placeholder="Filter By Country"
        class="filters__field"
      />
    </div>
    <div class="filters__item">
      <Dropdown
        v-model="score"
        :options="scores"
        showClear
        optionLabel="name"
        placeholder="Filter By Score"
        class="filters__field"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  &__item {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__field {
    width: 100%;
  }
}
</style>

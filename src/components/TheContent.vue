<script setup>
import { useUsersStore } from '@/stores/users';
import AppCard from '@/components/AppCard.vue';
import ProgressSpinner from 'primevue/progressspinner';
import ScrollPanel from 'primevue/scrollpanel';

const usersStore = useUsersStore();
</script>

<template>
  <section class="content">
    <h1 class="content__title">List</h1>

    <div class="content__inner">
      <ScrollPanel
        v-if="usersStore.getFilteredUsers.length"
        style="width: 100%; height: 500px"
      >
        <TransitionGroup
          name="card"
          tag="ul"
          mode="out-in"
          class="content__list"
        >
          <li
            v-for="user in usersStore.getFilteredUsers"
            :key="user.id"
            appear
            class="content__item"
          >
            <AppCard :card="user" />
          </li>
        </TransitionGroup>
      </ScrollPanel>
      <ProgressSpinner v-else />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  &-move,
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    transform: scale(0);

    opacity: 0;
  }

  &-leave-active {
    position: absolute;
  }
}

.content {
  min-height: 300px;
  padding: 8px 16px;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14),
              0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &__inner {
    display: flex;
    justify-content: center;
  }

  &__item {
    margin-bottom: 16px;
    padding-bottom: 16px;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(#000, 0.32);
    }
  }
}
</style>

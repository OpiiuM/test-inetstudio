<script setup>
import TheFilters from '@/components/TheFilters.vue'
import TheContent from '@/components/TheContent.vue'
import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()

usersStore.fetchData()
</script>

<template>
  <div class="app">
    <div class="app__container container">
      <div class="app__header">
        <div class="app__logo">
          <img
            src="@/assets/img/logo.svg"
            alt="logo"
            class="app__logo-image"
          />
        </div>
      </div>

      <div class="app__wrapper">
        <TheFilters class="app__filters" />
        <TheContent class="app__content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  max-width: 1240px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 16px;
  padding-left: 16px;
}

.text {
  &--primary {
    color: rgba(#000, 0.87);
  }

  &--lighten-1 {
    color: #bdbdbd;
    caret-color: #bdbdbd;
  }
}

.app {
  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__logo {
    width: 100%;
    height: 200px;
    margin-top: 16px;
    margin-bottom: 16px;

    &-image {
      display: block;

      width: 150px;
      max-width: 100%;
      height: auto;

      object-fit: cover;
    }
  }

  &__wrapper {
    @media (min-width: 1280px) {
      display: flex;
      align-items: center;

      width: 100%;
      height: 100%;
    }
  }

  &__filters {
    width: 100%;

    @media (min-width: 1280px) {
      flex-grow: 1;

      margin-right: 16px;
    }
  }

  &__content {
    width: 100%;
    margin-top: 16px;

    @media (min-width: 1280px) {
      flex-grow: 1;

      margin-top: 0;
    }
  }
}
</style>

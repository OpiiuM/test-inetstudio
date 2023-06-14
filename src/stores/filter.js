import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filter', {
  state: () => ({
    country: {},
    score: {},
  }),

  getters: {
    filters: (state) => {
      const { country, score } = state;

      return {
        country: country?.value || '',
        score: score?.value || '',
      };
    },
  },
});

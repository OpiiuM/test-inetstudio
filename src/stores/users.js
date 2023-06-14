import { defineStore } from 'pinia';
import { mergeUserData } from '@/common/composables';
import { useFilterStore } from '@/stores/filter';
import users from '@/mocks/users.json';
import usersParams from '@/mocks/users-params.json';

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
  }),

  getters: {
    getCountries: (state) => {
      return state.users?.reduce((acc, el) => {
        const hasCountry = acc.some(
          (country) => (country.value === el.country.value),
        );

        !hasCountry && acc.push(el.country);

        return acc;
      }, []);
    },

    getFilteredUsers: (state) => {
      const filterStore = useFilterStore();
      const filtersAreEmpty = Object.values(filterStore.filters).every(
        (value) => (!value.length),
      );

      if (filtersAreEmpty) return state.users;

      const countryFilter = ({ country }) => {
        return country.value.includes(filterStore.filters.country);
      };

      const scoreFilter = ({ score }) => {
        return eval(`${score} ${filterStore.filters.score}`);
      };

      return state.users.filter((user) => {
        let result = {
          country: countryFilter,
          score: scoreFilter,
        };

        return Object.entries(result).every(
          ([key, callback]) => !filterStore.filters[key].length || callback(user),
        );
      });
    },
  },

  actions: {
    // Иммитация запроса в БД
    async fetchData() {
      const promUsers = new Promise((resolve) => {
        setTimeout(() => {
          resolve(users);
        }, 2500);
      })
      .then((users) => users)
      .catch(() => new Error('Error fetch users'));

      const promParams = new Promise((resolve) => {
        setTimeout(() => {
          resolve(usersParams);
        }, 3500);
      })
      .then((params) => params)
      .catch(() => new Error('Error fetch params'));

      const [usersData, paramsData] = await Promise.all([promUsers, promParams]);

      this.users = mergeUserData(usersData, paramsData);
    },
  },
});

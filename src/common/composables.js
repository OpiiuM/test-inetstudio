import { streets } from '@/common/constants';

const getRandomArrItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const mergeUserData = (data, params) => {
  return data.map((user) => {
    const userParam = params.find((param) => user.id === param.userId);

    if (!userParam) return;

    return {
      ...user,
      ...userParam.params,
      address: {
        street: getRandomArrItem(streets),
        house: String(getRandomNumber(1, 20)),
        apartment: String(getRandomNumber(1, 500)),
      },
    };
  });
};

export const getFullAddress = (country, { street, house, apartment }) => {
  const address = [];

  if (country) {
    address.push(country);
  }

  if (street) {
    address.push(`ул. ${street}`);
  }

  if (house) {
    address.push(`д. ${house}`);
  }

  if (apartment) {
    address.push(`кв. ${apartment}`);
  }

  return address.join(', ');
};

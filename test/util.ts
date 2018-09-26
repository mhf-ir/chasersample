import faker from 'faker';

import IChaserSample from '../src/IChaserSample';

const getFakeChaserSample = (): IChaserSample => {
  const sample: IChaserSample = {
    name: faker.name.findName(),
    ranking: faker.random.number(),
  };
  return sample;
};

const isBiggerThan = (a: IChaserSample, b: IChaserSample): boolean => {
  if (a.ranking > b.ranking) {
    return true;
  }
  return false;
};

export {
  getFakeChaserSample,
  isBiggerThan,
};

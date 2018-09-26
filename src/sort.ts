import IChaserSample from './IChaserSample';

export default (samples: IChaserSample[]): IChaserSample[] => {
  const result: IChaserSample[] = samples.slice(0);
  result.sort((a: IChaserSample, b: IChaserSample) => {
    return a.ranking - b.ranking;
  });
  return result;
};

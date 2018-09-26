import IChaserSample from './IChaserSample';

export default (samples: IChaserSample[]): number => {
  const avg: number = samples.map((a: IChaserSample) => {
    return a.ranking;
  }).reduce(
    (a: number, b: number) => {
      return a + b;
    },
    0,
  );
  return avg / samples.length;
};

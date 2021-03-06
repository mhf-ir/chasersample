import { expect } from 'chai';

import {
  getFakeChaserSample,
  isBiggerThan,
} from './util';

import IChaserSample from '../src/IChaserSample';
import sort from '../src/sort';

describe('Sort', () => {
  it('Must be sort well as we expected via static data', () => {
    const samples = [
      {
        name: 'b',
        ranking: 1,
      },
      {
        name: 'a',
        ranking: 0,
      },
      {
        name: 'c',
        ranking: 2,
      },
    ];
    const sorted: IChaserSample[] = sort(samples);
    expect(sorted).to.be.deep.equal([
      {
        name: 'a',
        ranking: 0,
      },
      {
        name: 'b',
        ranking: 1,
      },
      {
        name: 'c',
        ranking: 2,
      },
    ]);
  });
  it('Must be sort well as we fake data', () => {
    const random = [];
    for (let i = 0; i < 100; i += 1) {
      random.push(getFakeChaserSample());
    }
    const sorted: IChaserSample[] = sort(random);
    sorted.forEach((s: IChaserSample, i: number) => {
      const nextIndex = i + 1;
      if (nextIndex in sorted) {
        expect(isBiggerThan(sorted[nextIndex], s)).to.be.equal(true);
      }
    });
  });
});

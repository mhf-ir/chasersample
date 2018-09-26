import { expect } from 'chai';

import {
  getFakeChaserSample,
  isBiggerThan,
} from './util';

import avg from '../src/avg';

describe('Average', () => {
  it('Must be average well as we expected via static data', () => {
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
    const average: number = avg(samples);
    expect(average).to.be.deep.equal(1);
  });
  it('Must be a average well as we fake data', () => {
    const random = [];
    let total = 0;
    for (let i = 0; i < 100; i += 1) {
      const s = getFakeChaserSample();
      random.push(s);
      total += s.ranking;
    }
    const testavg = total / random.length;
    const average: number = avg(random);
    expect(average).to.be.deep.equal(testavg);
  });
});

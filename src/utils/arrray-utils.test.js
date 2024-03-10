import { sortArrayByCategory } from './array-utils';

describe('sortArrayByCategory', () => {
  it('should sort array by decending value', () => {
    expect(
      sortArrayByCategory(
        [
          { test: '10' },
          { test: '4' },
          { test: '7' },
          { test: '47' },
          { test: '74' },
          { test: '13' },
        ],
        'test'
      )
    ).toStrictEqual([
      { test: '74' },
      { test: '47' },
      { test: '13' },
      { test: '10' },
      { test: '7' },
      { test: '4' },
    ]);
  });

  it('should return the same value for no category', () => {
    expect(
      sortArrayByCategory(
        [
          { test: '10' },
          { test: '4' },
          { test: '7' },
          { test: '47' },
          { test: '74' },
          { test: '13' },
        ],
        ''
      )
    ).toStrictEqual([
      { test: '10' },
      { test: '4' },
      { test: '7' },
      { test: '47' },
      { test: '74' },
      { test: '13' },
    ]);
  });
});

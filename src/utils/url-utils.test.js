import {
  getQueryParams,
  setQueryStringUrl,
} from './url-utils';

describe('getQueryParams', () => {
  it('should return correct query parameter value', () => {
    Object.defineProperty(window, 'location', {
      value: {
        search: '?param1=value1&param2=value2',
      },
      writable: true,
    });

    expect(getQueryParams('param1')).toBe('value1');
    expect(getQueryParams('param2')).toBe('value2');
    expect(getQueryParams('nonExistentParam')).toBe('');
  });
});

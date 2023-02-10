import { transformFoo } from './index';

describe('transformFoo', () => {
  it('should transform a foo into a bar', () => {
    const foo = {
      bar: 'baz',
    };

    const bar = transformFoo(foo);

    expect(bar).toEqual({
      foo: 'baz',
    });
  });
});


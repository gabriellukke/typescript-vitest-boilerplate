interface Foo {
  bar: string;
}

interface Bar {
  foo: string;
}

const foo: Foo = {
  bar: 'baz',
};

export function transformFoo(foo: Foo): Bar {
  return {
    foo: foo.bar,
  };
}

console.log(transformFoo(foo));


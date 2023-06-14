import { Equal, Expect } from "../helpers/type-utils";

// NOTE: An array extends object
type ArrayIsMoreConstrainedThanObject = [] extends object ? true : false;

// NOTE: keyof string is not never
type KeyofStringWithoutGeneric = keyof string;
type KeyofGeneric<T> = keyof T;
type KeyofStringWithGeneric = KeyofGeneric<string>;

// NOTE: * If the generic type is primitive, the whole object is resolved to the primitive itself. This is not the case if the primitive type is inlined without using a generic type
type WithoutGenerics = {
  [K in keyof string]: string[K];
};
type WithGenerics<T> = {
  [K in keyof T]: T[K];
};
type ResultWithGenerics = WithGenerics<string>;

// ---------------
// ACTUAL EXERCISE
// ---------------
type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : {
      // The 'extends object' check is not necessary, due to the behavior detailed above *.
      [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
    };

type MyType = {
  a: string;
  b?: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
    aa: string[];
  };
};

type Result = DeepPartial<MyType>;

type tests = [
  Expect<
    Equal<
      Result,
      {
        a?: string;
        b?: number;
        c?: {
          d?: string;
          e?: {
            f?: string;
            g?: {
              h?: string;
              i?: string;
            }[];
          };
          aa?: string[];
        };
      }
    >
  >
];

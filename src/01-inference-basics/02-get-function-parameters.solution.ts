import { Equal, Expect } from "../helpers/type-utils";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => {};

type MakeQueryParameters = Parameters<typeof makeQuery>;

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        }
      ]
    >
  >
];

// The other way around: Transforming an object to function parameters
type Params = {
  url: string;
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  };
};

const func1 = ({ url, opts }: Params) => {};

func1({ url: "adw" });

type ParamsTuple = [
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
];

type Params2 = Record<ParamsTuple[number], ParamsTuple[ParamsTuple[number]]>;

const func2 = (...[url, opts]: ParamsTuple) => {};

func2("awd");

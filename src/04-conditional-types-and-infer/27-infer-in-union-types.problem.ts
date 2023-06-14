import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
  parse: () => "hello",
};

type GetParserResult<T> = T extends () => infer R
  ? R
  : T extends
      | {
          parse: infer Parser;
        }
      | {
          extract: infer Parser;
        }
  ? GetParserResult<Parser>
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, string | boolean>>
];

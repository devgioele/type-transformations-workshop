import { Equal, Expect } from "../helpers/type-utils";

type Greetings = ["hello", "goodbye"];
type Greeting = Greetings[number];
type YouSayGoodbyeAndISayHello<T> = T extends Greeting
  ? T extends Greetings[0]
    ? Greetings[1]
    : Greetings[0]
  : never;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>
];

// type Route = `/${string}` | `/${string}${Route}`;
type Route = `/${string}`;

export const goToRoute = (route: Route) => {};

// Should succeed:

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

// Should error:

// @ts-expect-error
goToRoute("users/1");
// @ts-expect-error
goToRoute("http://facebook.com");

type Test = Capitalize<"hello">;

type MyCapitalize<T extends string> = T extends ""
  ? T
  : T extends [infer Head, ...infer Tail]
  ? `${Capitalize<Head>}${Tail}`
  : never;

type Test2 = MyCapitalize<"hello">;

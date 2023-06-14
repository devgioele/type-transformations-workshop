import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams<T extends string> = {
  [K in SplitPath<T> as K extends `:${infer Param}` ? Param : never]: string;
};

// Equivalent to S.Split<T, '/'>[number] from ts-toolbelt
type SplitPath<T extends string> = T extends ""
  ? ""
  : T extends `${infer Before}/${infer After}`
  ? SplitPath<Before> | SplitPath<After>
  : T;

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];

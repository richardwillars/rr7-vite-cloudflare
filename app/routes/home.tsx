import type { Route } from "./+types/home";
import { fooTest } from "~/foo.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return {
    foo: fooTest(),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <>Response from node js function: {loaderData.foo}</>;
}

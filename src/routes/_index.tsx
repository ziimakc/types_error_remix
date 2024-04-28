import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return {
    message: "x",
  };
}

export default function Index() {
  const xxx = useLoaderData<typeof loader>(); // unknown type

  return <div></div>;
}

import { hcWithType } from "@mono/backend/hc";

const client = hcWithType("http://localhost:8787");

export const dynamic = "force-dynamic";

export default async function Home() {
  const res = await client.message.$get();
  if (!res.ok) {
    console.log("Error:", res.status, res.statusText);
    return <div>Error: {res.status}</div>;
  }

  const data = await res.text();
  return <div>Hello world. Data: {data}</div>;
}

import Layout from "@/components/Layout";

export default function Jsx() {
  const a = 4;
  const b = 3;
  return (
    <Layout titulo="Entendendo o JSX">
      <div>
        <h1>JSX é um conceito Central</h1>
        {a * b}
        <br />
        {Math.random()}
      </div>
    </Layout>
  );
}

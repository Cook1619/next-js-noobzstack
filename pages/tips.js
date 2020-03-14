import Layout from "../components/Layout";
import Link from "next/link";

const TipLink = props => (
  <li>
    <Link href={`/tips?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Tip() {
  return (
    <div className="main">
      <Layout>
        <h1>My Tips N Tricks</h1>
        <ul>
          <TipLink title="React Tip" />
          <TipLink title="Node Tip" />
          <TipLink title="Javascript Tip" />
        </ul>
      </Layout>
    </div>
  );
}

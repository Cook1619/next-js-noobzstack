import { useRouter } from "next/router";
import Layout from "../components/MyLayout";

const Tipspage = () => {
  const router = useRouter();

  return (
    <div className="main">
      <Layout>
        <h1>{router.query.title}</h1>
        <p>This is the blog post content.</p>
      </Layout>
    </div>
  );
};

export default Tipspage;

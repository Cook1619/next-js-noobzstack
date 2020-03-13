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
      <style jsx>{`
        .main {
          margin-left: 160px;
          padding: 0px 10px;
        }
      `}</style>
    </div>
  );
};

export default Tipspage;

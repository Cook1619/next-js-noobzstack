import Layout from "../components/Layout";

const Blog = () => {
  return (
    <div className="main">
      <Layout>
        <h1>This is the blog page</h1>
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

export default Blog;

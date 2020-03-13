import Layout from "../components/Layout";
import Prism from "prismjs";

const Blog = () => {
  Prism.highlightAll();
  return (
    <div className="main">
      <Layout>
        <pre>
          <code className="language-javascript">
            {`
            function add(num){
              return num + num;
            } 
            `}
          </code>
        </pre>
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

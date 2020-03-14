import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Prism from "prismjs";

const Blog = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

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
    </div>
  );
};

export default Blog;

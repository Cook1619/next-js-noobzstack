import Layout from "../components/Layout";

const About = () => {
  return (
    <div className="main">
      <Layout>
        <h1>This is the about page</h1>
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

export default About;

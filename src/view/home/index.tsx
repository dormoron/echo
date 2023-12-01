import Layout from "@/layout";
import Hero from "@/view/home/components/hero";
import Articles from "@/view/home/components/articles";
import CTA from "@/view/home/components/cta";

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <Articles />
      <CTA />
    </Layout>
  );
};
export default Home;

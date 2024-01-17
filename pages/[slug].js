import { useRouter } from "next/router";
import Layout from "./component/layout";
import { getAllPots } from "../lib/api";
import { getPostBySlug } from "../lib/api";

const Slug = ({ posts, logo }) => {
  const router = useRouter();
  return (
    <Layout>
      {/* <pre>{JSON.stringify(logoname, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      {/* <img src={posts.news_image} alt="" /> */}

      <div className="p-24 text-red-800 text-xl ">
        <p> {posts.title} </p>
      </div>
    </Layout>
  );
};

export default Slug;

export const getStaticProps = async ({ params }) => {
  const posts = await getPostBySlug(params.slug);
  return {
    props: {
      posts: posts[0],
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPots();
  return {
    paths: posts.map((posts) => ({
      params: {
        slug: posts.slug,
      },
    })),
    fallback: false,
  };
};

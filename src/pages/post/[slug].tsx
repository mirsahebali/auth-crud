// pages/post/[id].js

import { useRouter } from "next/router";
import { request } from "graphql-request";
import Image from "next/image";

const uri =
  "https://api-ap-south-1.hygraph.com/v2/clejz1pne0v3h01uo2sgo5ben/master";
const query = `
 query data($slug: String!) {
    post(where: {slug: $slug}) {
      id
      title
      content{
    text
      }
     slug
    }
  }
`;

const PostPage = ({ post }: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        {" "}
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-2xl">{post.content.text}</p>
      </div>{" "}
    </div>
  );
};

export async function getStaticPaths() {
  const data = await request(uri, "{ posts { slug } }");
  const paths = data.posts.map((post: any) => ({
    params: { slug: post.slug.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  const data = await request(uri, query, { slug: params.slug });
  return { props: { post: data.post }, revalidate: 1 };
}

export default PostPage;

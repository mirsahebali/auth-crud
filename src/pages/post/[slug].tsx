
import { useRouter } from "next/router";
import { request, GraphQLClient } from 'graphql-request';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {query,  removePost} from "@/utils/GraphQL/graphql"


const uri =
  "https://api-ap-south-1.hygraph.com/v2/clejz1pne0v3h01uo2sgo5ben/master";

  
  const client = new GraphQLClient(uri, {
  headers:{
  authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}` }
  })

const PostPage = ({ post }: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const handleDelete = async () =>{
    try {
      const data = await client.request(removePost, { slug: router.query.slug });
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  }
  
  return (<>
  <Head>
    <title>{post.title}</title>
  </Head>
    <div className="flex flex-col justify-center items-center m-10">
      <div className="flex flex-col justify-center items-center">
        {" "}
        <h1 className="text-4xl font-bold flex justify-center">{post.title}</h1>
        <p className="text-xl w-[70%]">{post.content}</p>
      </div>{" "}
    </div>
      <button type="button" onClick={handleDelete}>Remove Post</button>
    <div className="flex justify-center items-center hover:scale-110 duration-200">
    <Link href={`/`}> <p className=" bg-yellow-200 w-fit rounded p-5 float-right">Go back to feed </p></Link>
    </div>  </>
  );
};

export async function getStaticPaths() {
  const data = await client.request( "{ posts { slug } }");
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

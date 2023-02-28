
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";

import Feed from "./Feed";
const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clejz1pne0v3h01uo2sgo5ben/master"
);


const QUERY = gql`
  {
    posts {
      id
      title
      slug
      content
      author {
        name
        avatar {
          url
        }
      }
      image {
        publishedAt
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: any) {
  
  
  return (
    <>
      <Head>
        <title>AuthCrud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Feed posts={posts} />
      </main>
    </>
  );
}

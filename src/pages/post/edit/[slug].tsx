import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { request, gql, GraphQLClient } from 'graphql-request';

const uri = "https://api-ap-south-1.hygraph.com/v2/clejz1pne0v3h01uo2sgo5ben/master";
  
const client = new GraphQLClient(uri, {
          headers:{
          authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}` }
          })
const GET_Post = gql`
 query MyQuery($slug: String!) {
  post(where: {slug: $slug}) {
    id
    slug
    content
    title
  }
}

`;

const UPDATE_POST = gql`
  mutation UpdatePost($slug: String!, $title: String!, $content: String!) {
    updatePost(data: {content: $content, title: $title}, where: {slug: $slug}){
      id
      title
      content
      slug
    }
  }
`;

function EditPostPage() {
  const router = useRouter();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await request(uri, GET_Post, { slug: router.query.slug });
        setPost(data.post);
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [router.query.slug]);

  const handleFormSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const data = await request(uri, UPDATE_POST, {
        slug: post.slug,
        title: event.target.title.value,
        content: event.target.content.value,
      });
      console.log(post.slug);
      
      post.slug = post.title.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
      router.push(`/post/${data.updatePost.slug}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className='flex justify-center items-center text-3xl'>Edit Post</h1>
      <form className='flex flex-col justify-center items-center' onSubmit={handleFormSubmit}>
      <div className='m-6 text-2xl flex flex-col hover:scale-110 duration-300'>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" defaultValue={post.title} />
        </div>
        <div className='m-6 text-2xl flex flex-col hover:scale-110 duration-300'>
        <label htmlFor="content">Content</label>
        <textarea rows={7} cols={80}   id="content" name="content" defaultValue={post.content} />
        </div>
        <div>
        <button type="submit" className='bg-green-400 p-4 rounded hover:scale-y-110 duration-300'>Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditPostPage;

import { useState } from "react";
import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";

const CreateBlogPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const router = useRouter();

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
    setSlug(
      title
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "")
    );
  };

  const handleContentChange = (event: any) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const client = new GraphQLClient(
      "https://api-ap-south-1.hygraph.com/v2/clejz1pne0v3h01uo2sgo5ben/master"
    );
    const CREATE_POST_MUTATION = `
      mutation CreatePost($title: String!, $content: String!, $slug: String!) {
        createPost(data:{title: $title, content: $content, slug: $slug}) {
          id
          title
          content
         slug
        }
        publishPost(where: {slug: $slug}) {
          id
        }
      }
    `;
    try {
      const data = await client.request(CREATE_POST_MUTATION, {
        title,
        content,
        slug,
      });

      console.log("New post created:", data.createPost);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="text-blue-800 text-4xl p-10">Create a new blog post</h1>
      <form onSubmit={handleSubmit}>
        <div className="text-2xl hover:scale-110 duration-300 p-10 flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            className="enabled:border-2 enabled:border-black enabled:rounded"
            onChange={handleTitleChange}
          />
        </div>
        <div className="text-2xl hover:scale-110 duration-300 p-10 flex flex-col">
          <label htmlFor="slug">Slug:</label>
          <input
            type="text"
            name="slug"
            id="slug"
            disabled
            className="enabled:border-2 enabled:border-black enabled:rounded"
            placeholder="{title} - this is auto-generated"
            value={slug}
          />
        </div>
        <div className="text-2xl hover:scale-110 duration-300 flex flex-col p-10">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            className="enabled:border-2 enabled:border-black enabled:rounded enabled:text-xs"
            onChange={handleContentChange}
          />
        </div>

        <button
          type="submit"
          className="w-fit bg-blue-300 rounded m-10 p-2 flex flex-col justify-center items-center"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;


import BlogCard from "./BlogCard";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useState } from "react";


export default function Feed({ posts }:any) {
const [searchTerm, setSearchTerm] = useState("")


  return (
    <div>
      <div className="text-5xl text-blue-700 flex justify-center p-5 font-bold hover:scale-90 duration-300 hover:text-[#2B3467]">
        AuthCRUD
      </div>
      <div>
        <SearchBar func={(e:any)=> setSearchTerm(e.target.value)}/>
      </div>
      {posts.filter((val:any)=> {
      if(searchTerm === ""){
        return val
      }else if (val.content.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      }
      
    }
    ).map((post: any) => {
        return (
          <div key={post.id}>
            <Link
              href={`post/${post.slug}`}
              className="blog-card flex justify-center p-5"
            >
              <BlogCard title={post.title} content={post.content} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

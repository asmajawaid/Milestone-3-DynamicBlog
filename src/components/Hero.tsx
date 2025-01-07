import React from "react";
import { blogs, Post } from "@/data/blog";
import BlogCard from "@/components/BlogCard";

function Hero() {
  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold uppercase my-12 text-center text-dbrown sm:text-3xl lg:text-5xl ">MOST RECENT BLOGS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-2">
          {blogs.map((post: Post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;

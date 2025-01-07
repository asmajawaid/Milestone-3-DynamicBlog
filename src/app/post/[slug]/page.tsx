// 'use client'

import { blogs } from "@/data/blog"; // Local blog data
import Image from "next/image";
import { notFound } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import Comments from "@/components/Comment";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface BlogPageProps {
  params: {
    slug: string;
  };
}

// Pre-generate static paths
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  // Find the blog post by slug
  const post = blogs.find((blog) => blog.slug === slug);

  // Handle blog not found
  if (!post) {
    notFound(); // This will render the 404 page
  }

  return (
    
<>
<div className="p-10 bg-white items-center justify-center shadow-lg shadow-dbrown rounded-sm mx-14 mt-5 gap-3">
<div className="border-t border-b border-gray-600 py-2 text-sm my-3 text-dbrown">
  NEW POST
</div>
{/* Top div */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-10 mx-4 lg:mx-20 items-center">
  {/* Image */}
  <span className="w-full">
    <Image
      src="/images/main.jpg"
      alt="Coffee Image"
      width={400}
      height={400}
      className="w-full h-auto rounded-lg object-cover"
    />
  </span>

  {/* Text */}
  <span
    className={`${playfair.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-dbrown leading-tight text-center tracking-widest`}
  >
    <span className="italic text-dbrown">ON</span> <br />
    THE <br />
    BLOG
  </span>
</div>

<Image
  src={post.image}
  alt={post.title}
  width={1000}
  height={500}
  className="mt-8 w-full h-[400px] rounded-sm"
/>
<h1 className="text-6xl text-center text-dbrown opacity-80 capitalize mt-10">
  
{post.title}
</h1>
<p className="text-dbrown text-center opacity-80 mb-6 text-xl mt-2">{post.subtitle}</p>

<p className="text-gray-900 opacity-80 mt-10">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est
  debitis officiis aliquid ullam cumque ipsa excepturi quibusdam, nostrum
  cupiditate. Reprehenderit quibusdam minima veritatis quae modi a error
  itaque aperiam! Lorem ipsum dolor sit amet, consectetur adipisicing
  elit. Sunt nemo quis ut. Ab itaque, optio iure illo dolores ipsam, qui
  repudiandae sunt fuga ipsum, asperiores culpa saepe maiores obcaecati
  reprehenderit.</p> 
  <p className="text-gray-900 opacity-80 mt-10"> Exercitationem incidunt reiciendis placeat, veniam ut
  eveniet nihil veritatis velit. Totam quasi nobis, ex repellat maxime
  distinctio sit maiores possimus ut quam. Ipsam pariatur ex delectus
  dolorum quasi provident sapiente? Minus cupiditate adipisci incidunt
  distinctio deleniti numquam dignissimos placeat iusto voluptates amet
  quia iure fugit sit commodi sunt beatae atque quaerat tempore
  consequatur explicabo similique odio, qui nam a. Placeat. Unde et nihil
  ullam numquam? </p> 
  <p className="text-gray-900 opacity-80 mt-10">
  Accusamus unde porro nihil magni qui corrupti hic fugit
  eligendi quis, quo, voluptatibus, impedit vitae iure perspiciatis veniam
  placeat! Aperiam dicta earum eum labore alias. Libero totam aliquid ex
  quaerat quibusdam molestias ut maxime eum. Laboriosam nesciunt, aliquam
  necessitatibus vero blanditiis quia dolore officiis impedit veniam
  quisquam et eligendi recusandae maxime. Debitis repellat nisi quaerat.
</p>
<div className="flex border-t border-b border-gray-600 text-dbrown py-2 text-sm mb-3 mt-20 justify-end items-end">
  @reallygreatsite
</div>
</div>

<Comments /> 


</>
  );
}

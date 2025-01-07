import { Post  } from '@/data/blog';
import Image from 'next/image';
import Link from 'next/link';


interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    // <div className="bg-purple-400 border rounded-lg overflow-hidden shadow-md">
    //   <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
    //   <div className="p-4">
    //     <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
    //     <p className="text-gray-600 mb-4">{post.subtitle}</p>
    //     <a href={`/post/${post.slug}`} className="text-blue-500 hover:underline">
    //       Read More
    //     </a>
    //   </div>
    // </div>
    <section className="flex flex-col justify-between h-[480px] bg-lBrown hover:scale-105 transition-transform ease-out duration-700 shadow-lg shadow-dbrown rounded">
    {/* Image Section*/}
    <div className="relative max-h-76 flex-1">
      <Image
        src={post.image}
        alt={post.title}
         fill
        className="object-cover rounded-t"
      />
    </div>

    {/* Title and Summary */}
    <div className="flex flex-col justify-between gap-y-2 p-4">
      <h2 className="text-lg font-semibold line-clamp-2 text-dbrown dark:text-light leading-tight mb-2">
        {post.title}
      </h2>
      <p className="text-dark/70 dark:text-light/70 line-clamp-3 text-dbrown">
        {post.subtitle}
      </p>

      {/* Read More dynamic Link */}
      <Link
        href={`/post/${post.slug}`}
        className="block px-4 py-1 text-center bg-bagie rounded text-dbrown font-semibold mt-4 hover:text-dbrown hover:bg-lPink  active:bg-yellow-600 active:text-bagie hover:shadow-md hover:underline"
      >
        Read More ...
      </Link>
    </div>
  </section>
  );
}

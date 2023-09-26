import Image from "next/image";
import Link from "next/link";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import article1 from "../../../public/article1.png";
import { getMDXComponent } from "next-contentlayer/hooks";

export default async function Article(post: Post) {
  // console.log(post);

  return (
    <li key={post.title} className="group mt-10">
      <Link href={`${post.url}`}>
        <div className="flex flex-col items-start justify-start w-full">
          <span className="text-text-gray text-xs font-normal leading-1.4 mb-2.5">{post.site}</span>
          <div className="flex justify-between w-full">
            <h4 className="text-[#333d4b] text-32 font-semibold leading-1.4 mb-2.5 transition duration-200 ease-in-out group-hover:text-[#3182f6]">
              {post.title}
            </h4>
            <time className="text-text-gray text-xs leading-1.4 group-hover:text-[#3182f6]">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </div>
          <p className="text-text-gray text-xs">서브 제목 부분(없을 수도 있음)</p>
        </div>
      </Link>
    </li>
  );
}

import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { SiTistory } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="pt-16 flex flex-col items-center bg-[#F5F5F5]">
        <div className="mb-3 flex space-x-4">
          <AiFillGithub className="text-3xl" />
          <MdEmail className="text-3xl" />
          <SiTistory className="text-2xl" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>SONG</div>
          <div>•</div>
          <div> © 2023 </div>
          <div>•</div>
          <Link href="https://thdtjdgml415@naver.com">thdtjdgml415@naver.com</Link>
        </div>
      </div>
    </footer>
  );
}

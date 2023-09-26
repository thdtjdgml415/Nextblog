import Image from "next/image";
import Link from "next/link";
import articleLogo from "../public/articleLogo.png";
import Article from "./container/articleList/article";

import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

// import Article from "../container/articleList/article";

export default async function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  // console.log("posts", posts);

  const articlePosts = posts.filter((post) => !post.category);

  const filteredPosts = posts.filter((post) => post.category);
  console.log("filteredPosts", filteredPosts);
  return (
    <>
      <main className="pt-16 w-full max-w-[900px] mx-auto bg-[#F5F5F5]">
        <div className="relative flex max-w-screen-2xl">
          <aside className="pt-16 px-10 flex-auto mx-auto top-16 overflow-y-auto h-[calc(100vh-200px)]">
            {/* 자기소개 */}
            <div className="mb-10" style={{ fontFamily: "Noto Sans KR" }}>
              <p>안녕하세요. 깨끗한 코드를 지향하는 프론트엔드 개발자 송성희 라고 합니다.</p>
            </div>
            {/* 자기소개 */}

            {/* note */}
            <h2 className="text-sm font-medium leading-5 text-gray-500 mb-5">note</h2>
            <ul className="select-none text-text-gray">
              {filteredPosts.map((note, idx) => {
                return (
                  <>
                    <Link href={note.url}>
                      <li key={idx} className="mb-[0.5rem]">
                        <div className="block underline decoration-1 leading-tight underline-offset-4">
                          {note.title}
                        </div>
                      </li>
                    </Link>
                  </>
                );
              })}
            </ul>
            {/* note */}
          </aside>

          {/* article */}
          <section className="flex-auto w-2/3 pt-16">
            <h2 className="w-full text-sm font-medium leading-5 text-gray-500 mb-5">article</h2>

            <ul className="select-none">
              {articlePosts.map((post: any, idx) => {
                return <Article key={idx} {...post} />;
              })}
            </ul>
          </section>
          {/* article */}
        </div>
      </main>
    </>
  );
}

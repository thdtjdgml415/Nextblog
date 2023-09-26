import Image from "next/image";
import subLogo2 from "../../public/subLogo2.png";
import subLogo from "../../public/subLogo.png";
// import article1 from "../../../../public/article1.png";
import titleImage from "../../public/undraw_complete_design_re_h75h.svg";
// import { NotoSansKorean } from "next/font/google";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
// import { connectDB } from "../../util/database";
// import { ObjectId } from "mongodb";

interface articleProps {
  title: string;
  content: string;
  time: string;
  id: number;
}

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default async function series(props) {
  // const client = await connectDB;
  // const db = client.db("forum");
  // console.log("props", props);
  // let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.slug) });
  // console.log(result);
  return (
    <>
      <section className="w-full relative bg-regal-gray py-28 m-auto font-[openSans]">
        <div className="mx-auto max-w-screen-lg bg-regal-pink h-96 rounded-2xl flex mt-20 mb-40">
          <div>
            <Image src={titleImage} alt="sublogo" className="" />
          </div>
          <div className="p-10">
            <div className="flex items-center mb-40">
              <Image src={subLogo2} alt="sublogo" className="w-5" />
              <h2 className="text-lg font-semibold text-white">포스팅</h2>
            </div>
            <p className="text-lg font-semibold text-white">자신의 개발일기를 담은 글을 모아놓은 블로그</p>
          </div>
        </div>
      </section>

      <section>
        <ul className="w-full w-full relative m-auto pt-40 pb-40">
          {/* 카드하나 */}
          {/* {result.article.map((data: articleProps) => {
            console.log("data", data);
            return (
              <Link href={`/detail/${data.id}`}>
                <li key={data.id} className="max-w-screen-lg mx-auto mb-10">
                  <article className="group select-none text-white">
                    <div className="w-full box-border p-5 rounded-md flex justify-between items-center">
                      <div className="w-full">
                        <h4 className="text-xl font-semibold leading-5 text-gray-800 mb-4 transition duration-200 ease-in-out group-hover:text-blue-400">
                          {data.title}
                        </h4>
                        <p className="w-full text-gray-700 text-base font-light leading-7 mb-4">{data.content}</p>
                        <time className="text-sm font-normal leading-5 text-gray-500">{data.time}</time>
                      </div>
                      <div className="min-w-[270px]  transition duration-200 ease-in-out group-hover:drop-shadow-md group-hover:shadow-2xl">
                        <div className="relative w-full h-0 pt-[65.5%]">
                          <div className="absolute top-0 left-0 w-full h-full">
                            <div className="w-full h-full rounded-lg overflow-hidden transform translate-z-0">
                              <div className="w-full h-full object-cover transform translate-z-0">
                                <span className="box-border block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 absolute top-0 left-0 bottom-0 right-0">
                                  <Image
                                    src={article1}
                                    alt="cardImage"
                                    className="absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              </Link>
            );
          })} */}
          {/* 카드하나 */}
        </ul>
      </section>
      {/* 추천 시리즈 */}
      <section>
        <div className="w-full p-5 box-sizing relative max-w-screen-lg mx-auto ">
          <h4 className="font-semibold text-3xl leading-5 text-regal-small-gray mb-10">추천 글</h4>
          <ul className="w-full flex flex-wrap justify-between ">
            {/* 카드하나 */}
            <Link href={"/series/develop"}>
              <li className="w-72 h-96 p-5 mb-20 text-white bg-regal-black border-2 border-transparent rounded-md flex flex-col cursor-pointer transform origin-bottom-right transition-transform duration-500 ease-in-out hover:rotate-6">
                <div className="main-content flex-1">
                  <div className="header">
                    <span className="font-semibold text-gray-700 mr-1">Article on</span>
                    <span className="text-gray-700">29-June-2023</span>
                  </div>
                  <p className="heading text-2xl font-semibold mt-6">Different ways to use CSS in React</p>
                  <div className="categories flex gap-2">
                    <span className="bg-pink-500 py-1 px-2 font-semibold text-uppercase text-xs rounded-full">
                      React
                    </span>
                    <span className="bg-pink-500 py-1 px-2 font-semibold text-uppercase text-xs rounded-full">CSS</span>
                  </div>
                </div>
                <div className="footer font-semibold text-gray-700 mt-4">by Harsh Gupta</div>
              </li>
            </Link>
            {/* 카드하나 */}
            <li className="w-72 h-96 p-5 mb-20 text-white bg-regal-pink border-2 border-transparent rounded-md flex flex-col cursor-pointer transform origin-bottom-right transition-transform duration-500 ease-in-out hover:rotate-6">
              <div className="main-content flex-1">
                <div className="header">
                  <span className="font-semibold text-gray-700 mr-1">Article on</span>
                  <span className="text-gray-700">29-June-2023</span>
                </div>
                <p className="heading text-2xl font-semibold mt-6">Different ways to use CSS in React</p>
                <div className="categories flex gap-2">
                  <span className="bg-pink-500 py-1 px-2 font-semibold text-uppercase text-xs rounded-full">React</span>
                  <span className="bg-pink-500 py-1 px-2 font-semibold text-uppercase text-xs rounded-full">CSS</span>
                </div>
              </div>
              <div className="footer font-semibold text-gray-700 mt-4">by Harsh Gupta</div>
            </li>
            <li className="w-72 h-96 p-5 mb-20 text-white bg-regal-yellow border-2 border-transparent rounded-md flex flex-col cursor-pointer transform origin-bottom-right transition-transform duration-500 ease-in-out hover:rotate-6">
              <div className="main-content flex-1">
                <div className="header">
                  <span className="font-semibold text-gray-700 mr-1">Article on</span>
                  <span className="text-gray-700">29-June-2023</span>
                </div>
                <p className="heading text-2xl font-semibold mt-6">Different ways to use CSS in React</p>
                <div className="categories flex gap-2">
                  <span className="bg-pink-500 py-1 px-2 font-semibold text-uppercase text-xs rounded-full">React</span>
                  <span className="bg-pink-500 py-1 px-2 font-semibold text-uppercase text-xs rounded-full">CSS</span>
                </div>
              </div>
              <div className="footer font-semibold text-gray-700 mt-4">by Harsh Gupta</div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
// import useIsVisible from "../../container/hooks/useIsVisible ";
// import subLogo from "../../public/subLogo.png";

export default async function Header() {
  return (
    <header className="fixed left-0 top-0 w-full select-none h-[60px] border-b-4 border-gray-200 z-50 bg-[#F5F5F5]">
      <div className="max-w-[57rem] w-full h-full m-auto">
        <div className="flex mt-1.5 max-h-full justify-between">
          <div className="flex items-center mr-10 min-h-60">
            <p className="ml-12" style={{ fontFamily: "Noto Sans KR", fontWeight: "200" }}>
              S
            </p>
          </div>
          <ul className="flex items-center p-0 m-0">
            <li className="px-2 rounded-md hover:bg-blue-100 hover:text-blue-400">
              <div className="px-2.5 py-3 text-15 leading-20 text-currentColor rounded-8 border-0 cursor-pointer bg-transparent text-left">
                <Link href="/">Post</Link>
              </div>
            </li>
            <li className="px-2 rounded-md hover:bg-blue-100 hover:text-blue-400">
              <div className="px-2.5 py-3 text-15 leading-20 text-currentColor rounded-8 border-0 cursor-pointer bg-transparent text-left">
                <Link href="/Tag">Tag</Link>
              </div>
            </li>
            <li className="px-2 rounded-md hover:bg-blue-100 hover:text-blue-400">
              <div className="px-2.5 py-3 text-15 leading-20 text-currentColor rounded-8 border-0 cursor-pointer bg-transparent text-left">
                <Link href="/about">about</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export const generatedStaticParams = async () => {
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generatedMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
};

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);
  // console.log("MDXContent", MDXContent);
  return (
    <div className="w-full mx-auto max-w-[1072px] py-32">
      <div className="main-grid">
        <nav>
          <Link href={"/"}>
            <p>뒤로</p>
          </Link>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
        <article className="">
          <div className="">
            <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
              {new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
            </time>
            <h1 className="text-3xl font-bold">{post.title}</h1>
          </div>
          <MDXContent components={mdxComponents} />
        </article>
      </div>
    </div>
  );
}

import images from "@/constants/image";
import {Link} from "@solidjs/router";
import {Component, JSXElement} from "solid-js";


export interface SuggestedPostsProps {
    className:JSXElement;
    header:string;
    posts: string[];
    tags:string[];
}


const SuggestedPosts:Component<SuggestedPostsProps> = ({ className, header, posts, tags }) => {
    return (
        <div
            class={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
        >
            <h2 class="font-roboto font-medium text-dark-hard md:text-xl">
                {header}
            </h2>
            <div class="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
                {posts.map((item) => (
                    <div
                        class="flex space-x-3 flex-nowrap items-center"
                    >
                        <img
                            class="aspect-square object-cover rounded-lg w-1/5"
                            src={
                                images.samplePostImage
                            }
                            alt="这是一个标题"
                        />
                        <div class="text-sm font-roboto text-dark-hard font-medium">
                            <h3 class="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                                <Link href={`/`}>{item}</Link>
                            </h3>
                            <span class="text-xs opacity-60">
                {new Date("20002-01-02").toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}
              </span>
                        </div>
                    </div>
                ))}
            </div>
            <h2 class="font-roboto font-medium text-dark-hard mt-8 md:text-xl">
                Tags
            </h2>
            {tags.length === 0 ? (
                <p class="text-slate-500 text-xs mt-2">
                    There is not tags for this post
                </p>
            ) : (
                <div class="flex flex-wrap gap-x-2 gap-y-2 mt-4">
                    {tags.map((item) => (
                        <Link
                            href="/"
                            class="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SuggestedPosts;

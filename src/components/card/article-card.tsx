import { BsCheckLg } from "solid-icons/bs";

import images from "@/constants/image";
import {Component} from "solid-js";
import {Link} from "@solidjs/router";

interface postProps {
    title: string;
    caption:string;
}

export interface ArticleCardProps {
    className: string;
    post: postProps
}

const ArticleCard:Component<ArticleCardProps> = (props) => {
    return (
        <div
            class={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${props.className}`}
        >
            <Link href="/">
                <img
                    src={
                             images.samplePostImage
                    }
                    alt="title"
                    class="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
            </Link>
            <div class="p-5">
                <Link href="/">
                    <h2 class="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                        {props.post.title}
                    </h2>
                    <p class="text-dark-light mt-3 text-sm md:text-lg">
                        {props.post.caption}
                    </p>
                </Link>
                <div class="flex justify-between flex-nowrap items-center mt-6">
                    <div class="flex items-center gap-x-2 md:gap-x-2.5">
                        <img
                            src={
                                     images.userImage
                            }
                            alt="post profile"
                            class="w-9 h-9 md:w-10 md:h-10 rounded-full"
                        />
                        <div class="flex flex-col">
                            <h4 class="font-bold italic text-dark-soft text-sm md:text-base">
                                好好好
                            </h4>
                            <div class="flex items-center gap-x-2">
                <span
                    class={`"bg-red-500" w-fit bg-opacity-20 p-1.5 rounded-full`}
                >
                  <BsCheckLg class="w-1.5 h-1.5 text-[#36B37E]" />
                </span>
                                <span class="italic text-dark-light text-xs md:text-sm">
                  Verified writer
                </span>
                            </div>
                        </div>
                    </div>
                    <span class="font-bold text-dark-light italic text-sm md:text-base">
                2033-01-02
          </span>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;

import {Component, JSX} from "solid-js";

export interface ArticleCardSkeletonProps {
    class:JSX.CSSProperties;
}

const ArticleCardSkeleton:Component<ArticleCardSkeletonProps> = (props) => {
    return (
        <div
            class={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${props.class} animate-pulse`}
        >
            {/* image */}
            <div class="w-full aspect-video bg-slate-300" />
            <div class="p-5">
                {/* title */}
                <div class="w-56 h-2 mt-4 bg-slate-300 rounded-lg" />
                {/* caption */}
                <div class="w-24 h-2 mt-4 bg-slate-300 rounded-lg" />
                <div class="flex justify-between flex-nowrap items-center mt-6">
                    <div class="flex items-center gap-x-2 md:gap-x-2.5">
                        {/* profile image */}
                        <div class="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-300" />
                        <div class="flex flex-col">
                            {/* user's name */}
                            <div class="w-24 h-2 bg-slate-300 rounded-lg" />
                            {/* verified status */}
                            <div class="w-16 h-2 mt-2 bg-slate-300 rounded-lg" />
                        </div>
                    </div>
                    {/* date */}
                    <div class="w-10 h-2 mt-4 bg-slate-300 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default ArticleCardSkeleton;

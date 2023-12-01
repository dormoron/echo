import { BiSolidImageAlt } from "solid-icons/bi";

const ArticleDetailSkeleton = () => {
    return (
        <section class="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start animate-pulse">
            <article class="flex-1">
                {/* post image */}
                <div class="rounded-xl w-full aspect-video bg-slate-300 flex justify-center items-center">
                    <BiSolidImageAlt class="text-4xl text-slate-400" />
                </div>
                {/* title */}
                <div class="mt-4 md:text-[26px] w-2/5 h-2 rounded-lg bg-slate-400" />
                <div class="mt-4 prose text-sm sm:text-base">
                    <p class="w-1/2 h-2 mt-6 rounded-lg bg-slate-300"></p>
                    <p class="w-full h-2 mt-4 rounded-lg bg-slate-300"></p>
                    <p class="w-[70%] h-2 mt-4 rounded-lg bg-slate-300"></p>
                    <p class="w-4/5 h-2 mt-4 rounded-lg bg-slate-300"></p>
                </div>
            </article>

            {/* Suggested posts */}
            <div
                class={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 mt-8 lg:mt-0 lg:max-w-xs`}
            >
                {/* title */}
                <div class="w-[20%] h-2 rounded-lg bg-slate-300" />
                <div class="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
                    {[...Array(6)].map(() => (
                        <div
                            class="flex space-x-3 flex-nowrap items-center"
                        >
                            {/* image */}
                            <div class="aspect-square w-1/5 rounded-lg bg-slate-300" />
                            <div class="w-full">
                                {/* post title */}
                                <div class="w-full h-2 rounded-lg bg-slate-300" />
                                <p class="w-[60%] h-2 mt-4 rounded-lg bg-slate-300"></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticleDetailSkeleton;
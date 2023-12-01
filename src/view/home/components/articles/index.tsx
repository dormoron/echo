import { FaSolidArrowRight } from "solid-icons/fa";

import {ArticleCard} from "@/components/card";
import {createSignal, For} from "solid-js";

const Articles = () => {
    const [data] = createSignal([
        {
            post:{
                title:"你好",
                caption:"笨蛋"
            }
        },
        {
            post:{
                title:"你好",
                caption:"笨蛋"
            }
        },
        {
            post:{
                title:"你好",
                caption:"笨蛋"
            }
        },
        {
            post:{
                title:"你好",
                caption:"笨蛋"
            }
        },
        {
            post:{
                title:"你好",
                caption:"笨蛋"
            }
        },
        {
            post:{
                title:"你好",
                caption:"笨蛋"
            }
        }
    ])
    return (
        <section class="flex flex-col container mx-auto px-5 py-10">
            <div class=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
                <For each={data()}>
                    {
                        (cat ) => (
                            <ArticleCard
                                post={cat.post}
                                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"/>
                        )
                    }
                </For>
            </div>
            <button class="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
                <span>More articles</span>
                <FaSolidArrowRight class="w-3 h-3" />
            </button>
        </section>
    );
};

export default Articles;

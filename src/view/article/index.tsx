// import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "@/components/bread-crumbs";
import Layout from "@/layout";
import SocialShareButtons from "@/components/social-share-buttons";
import  images  from "@/constants/image";
import SuggestedPosts from "./components/suggested-posts";
// import ErrorMessage from "../../components/error-message";
// import { useSelector } from "react-redux";
// import parseJsonToHtml from "../../utils/parseJsonToHtml";
import Editor from "@/components/editor";
import {Link} from "@solidjs/router";

const ArticleDetailPage = () => {
    // const { slug } = useParams();
    // const userState = useSelector((state) => state.user);
    // const [breadCrumbsData, setbreadCrumbsData] = useState([]);
    // const [body, setBody] = useState(null);
    // const { data, isLoading, isError } = createQuery({
    //     queryFn: () => getSinglePost({ slug }),
    //     queryKey: ["blog", slug],
    //     onSuccess: (data) => {
    //         setbreadCrumbsData([
    //             { name: "Home", link: "/" },
    //             { name: "Blog", link: "/blog" },
    //             { name: "Article title", link: `/blog/${data.slug}` },
    //         ]);
    //         setBody(parseJsonToHtml(data?.body));
    //     },
    // });

    // const { data: postsData } = createQuery({
    //     queryFn: () => getAllPosts(),
    //     queryKey: ["posts"],
    // });
    const breadData = [{
        link:"/",
        name: '测试',

    }]

    return (
        <Layout>
            {/*<ArticleDetailSkeleton />*/}
            <section class="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
                <article class="flex-1">
                    <BreadCrumbs props={breadData}/>
                    <img
                        class="rounded-xl w-full"
                        src={
                            // data?.photo
                            //     ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                            //     : images.samplePostImage
                            images.samplePostImage
                        }
                        alt={"ces"}
                    />
                    <div class="mt-4 flex gap-2">
                        {/*{data?.categories.map((category) => (*/}
                        {/*    <Link*/}
                        {/*        to={`/blog?category=${category.name}`}*/}
                        {/*        class="text-primary text-sm font-roboto inline-block md:text-base"*/}
                        {/*    >*/}
                        {/*        {category.name}*/}
                        {/*    </Link>*/}
                        {/*))}*/}
                        <Link
                            href={`/`}
                            class="text-primary text-sm font-roboto inline-block md:text-base"
                        >
                            测试
                        </Link>
                    </div>
                    <h1 class="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                        测试afadfadbewebfiagianoanvian
                    </h1>
                    <div class="w-full">
                        <Editor content={"<div>你好 世界！</div>"} editable={false} />
                    </div>
                    {/*<CommentsContainer*/}
                    {/*    comments={"测试"}*/}
                    {/*    className="mt-10"*/}
                    {/*    loggedUserId={"1"}*/}
                    {/*    postSlug={slug}></CommentsContainer>*/}
                </article>
                <div>
                    <SuggestedPosts
                        header="Latest Article"
                        posts={["测试"]}
                        tags={["测试"]}
                        className="mt-8 lg:mt-0 lg:max-w-xs"
                    />
                    <div class="mt-7">
                        <h2 class="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                            Share on:
                        </h2>
                        <SocialShareButtons
                            url={encodeURI(window.location.href)}
                            title={encodeURIComponent("测试")}
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ArticleDetailPage;

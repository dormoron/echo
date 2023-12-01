import  images  from "@/constants/image";

const CTA = () => {
    return (
        <>
            <svg
                class="w-full h-auto max-h-40 translate-y-[1px]"
                preserveAspectRatio="none"
                viewBox="0 0 2160 263"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="Wave"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
                    fill="#0D2436"
                />
            </svg>

            <section class="relative bg-dark-hard px-5">
                <div class="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
                    <div class="col-span-12 lg:col-span-6">
                        <h2 class="text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
                            Get our stories delivered From us to your inbox weekly.
                        </h2>
                        <div class="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
                            <input
                                type="text"
                                class="px-4 py-3 rounded-lg w-full placeholder:text-dark-light"
                                placeholder="Your Email"
                            />
                            <button class="px-4 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap">
                                Get started
                            </button>
                        </div>
                        <p class="text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
              <span class="font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-dark-light">
                Get a response tomorrow
              </span>{" "}
                            if you submit by 9pm today. If we received after 9pm will get a
                            reponse the following day.
                        </p>
                    </div>
                    <div class="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
                        <div class="w-3/4 mx-auto relative">
                            <div class="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]" />
                            <div class="w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]" />
                            <div class="w-full rounded-xl bg-white p-3 z-[1] relative">
                                <img
                                    src={images.CtaImage}
                                    alt="title"
                                    class="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                                />
                                <div class="p-5">
                                    <h2 class="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                                        Future of Work
                                    </h2>
                                    <p class="text-dark-light mt-3 text-sm md:text-lg">
                                        Majority of peole will work in jobs that don’t exist today.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CTA;

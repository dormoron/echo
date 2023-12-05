const ShootStart = () => {
    return (
        <div class="w-112.5 h-112.5 relative">
            <div class="w-112.5 h-112.5 absolute overflow-hidden circle">
                {/*天空部分*/}
                <div class="absolute w-full h-[55%] top-0 overflow-hidden">
                    <div class="absolute w-full h-full bg-night">
                        <div class="shooting-star bg-shooting absolute w-8.75 h-0.75 left-85 top-6.4"></div>
                        <div class="w-1.2 h-1.2 left-55 top-30 stars animate-[twinkle_2s_infinite_linear] delay-500"></div>
                        <div class='w-1 h-1 left-52 top-7 opacity-80 stars animate-[twinkle_2.3s_infinite_linear]'></div>
                        <div class='w-1 h-1 left-43 top-17 opacity-100 stars animate-[twinkle_2.7s_infinite_linear]'></div>

                        <div class="w-1.2 h-1.2 left-6 top-44 stars animate-[twinkle_1s_infinite_linear]"></div>
                        <div class='w-1 h-1 left-15 top-45 opacity-80 stars animate-[twinkle_1.3s_infinite_linear]'></div>
                        <div class='w-1 h-1 left-10 top-35 opacity-100 stars animate-[twinkle_1.7s_infinite_linear]'></div>

                        <div class="w-1.2 h-1.2 left-31 top-13 stars animate-[twinkle_0.8s_infinite_linear]"></div>
                        <div class='w-1 h-1 left-65 top-37 opacity-80 stars animate-[twinkle_1.1s_infinite_linear]'></div>
                        <div class='w-1 h-1 left-47 top-40 opacity-100 stars animate-[twinkle_1.5s_infinite_linear]'></div>

                        <div class="w-1.2 h-1.2 left-75 top-25 stars animate-[twinkle_1s_infinite_linear]"></div>
                        <div class='w-1 h-1 left-85 top-20 opacity-80 stars animate-[twinkle_1.1s_infinite_linear]'></div>
                        <div class='w-1 h-1 left-100 top-37 opacity-100 stars animate-[twinkle_1.5s_infinite_linear]'></div>
                    </div>
                </div>

                {/*山川*/}
                <div class="absolute w-full h-[20%] bottom-[35%]">
                    <div class="w-45 h-30 top-0 bg-distant mountains">
                        <div class="w-50 h-25 top-0.75 m-l-20 bg-distant mountains"></div>
                        <div class="w-37.5 h-20 m-l-62.5 bg-distant mountains"></div>
                    </div>
                    <div class="w-45 h-30 top-3 m-l-45 bg-mountain mountains">
                        <div class="w-50 h-25 top-0.75 -m-l-27.5 bg-mountain mountains"></div>
                        <div class="w-55 h-37.5 -m-l-62.5 bg-mountain mountains"></div>
                    </div>
                    <div class="w-50 h-22.5 top-4.5 right-0 -m-r-12.5 bg-mountain mountains">
                        <div class="absolute w-62.5 h-20 top-3.75 right-0 m-r-37.5 bg-mountain mountains"></div>
                    </div>
                </div>

                {/*月亮*/}
                <div class="absolute w-72.5 h-72.5 m-auto inset-0 z-10">
                    <div class="absolute w-22.5 h-22.5 rounded-[50%] bg-moon"></div>
                </div>

                {/*海洋*/}
                <div class="absolute w-full h-[42%] bottom-0 z-200 opacity-100 transition-all duration-300 ease delay-200 origin-t animate-[ocean_3s_forwards] bg-ripple">
                    <div class="relative w-full h-full bg-undersea opacity-100 transition-opacity-300 delay-200 z-500">
                        <div class="absolute w-22.5 h-22.5 left-20 m-t-22.5 rounded-[50%] bg-bg-waterMoon"></div>

                        {/*山川*/}
                        <div class="absolute w-full h-[20%] bottom-[35%] opacity-50 origin-c top-0 fixed overflow-hidden h-[31.5%] mountain-bottom">
                            <div class="w-45 h-30 top-0 bg-distant mountains">
                                <div class="w-50 h-25 top-0.75 m-l-20 bg-distant mountains"></div>
                                <div class="w-37.5 h-20 m-l-62.5 bg-distant mountains"></div>
                            </div>
                            <div class="w-45 h-30 top-3 m-l-45 bg-mountain mountains">
                                <div class="w-50 h-25 top-0.75 -m-l-27.5 bg-mountain mountains"></div>
                                <div class="w-55 h-37.5 -m-l-62.5 bg-mountain mountains"></div>
                            </div>
                            <div class="w-50 h-22.5 top-4.5 right-0 -m-r-12.5 bg-mountain mountains">
                                <div class="absolute w-62.5 h-20 top-3.75 right-0 m-r-37.5 bg-mountain mountains"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShootStart;
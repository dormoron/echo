import {
    AiFillHeart,
} from "solid-icons/ai";

const Footer = () => {
    return (
        <section class="bg-dark-hard">
            <footer class="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
                <div class="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
                    <div class="bg-primary text-white p-3 rounded-full">
                        <AiFillHeart class="w-7 h-auto" />
                    </div>
                    <p class="font-bold italic text-dark-light">
                        Copyright © 2023. Crafted with love.
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;

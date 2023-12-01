import { AiOutlineMenu, AiOutlineClose } from 'solid-icons/ai'
import NavItem from "@/layout/header/components/nav-item";
import images from "@/constants/image";
import {createSignal} from "solid-js";
import {Link} from "@solidjs/router";


const navItemsInfo = [
    { name: "Home", type: "link", href: "/", items: []},
    { name: "Articles", type: "link", href: "/articles", items: [] },
    {
        name: "Pages",
        type: "dropdown",
        href: '/',
        items: [
            { title: "About us", href: "/about" },
            { title: "Contact us", href: "/contact" },
        ],
    },
    { name: "Pricing", type: "link", href: "/pricing", items: [] },
    { name: "Faq", type: "link", href: "/faq", items: [] },
];

const Header = () => {
    const [navIsVisible, setNavIsVisible] = createSignal(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        });
    };


    return (
        <section class="sticky top-0 left-0 right-0 z-50 bg-white">
            <header class="container mx-auto px-5 flex justify-between py-4 items-center">
                <Link href="/">
                    <img class="w-16" src={images.Logo} alt="logo" />
                </Link>
                <div class="lg:hidden z-50">
                    {navIsVisible() ? (
                        <AiOutlineClose
                            class="w-6 h-6"
                            onClick={navVisibilityHandler}
                        />
                    ) : (
                        <AiOutlineMenu class="w-6 h-6" onClick={navVisibilityHandler} />
                    )}
                </div>
                <div
                    class={`${
                        navIsVisible() ? "right-0" : "-right-full"
                    } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
                >
                    <ul class="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
                        {navItemsInfo.map((item) => (
                            <NavItem name={item.name} type={item.type} href={item.href} items={item.items}/>
                        ))}
                    </ul>
                    <button
                        class="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                        Sign in
                    </button>
                </div>
            </header>
        </section>
    );
};

export default Header;
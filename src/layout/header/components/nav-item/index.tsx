import { FiChevronDown } from 'solid-icons/fi'
import {Component, createSignal, JSX} from 'solid-js';
import {Link} from "@solidjs/router";

interface ItemsProps {
    href:string;
    title:string;
}

export interface NavItemProps {
    type: string;
    href: string;
    name: string;
    items:Array<ItemsProps>;
}

const NavItem:Component<NavItemProps> = (item) => {
    const [dropdown, setDropdown] = createSignal(false);

    const toggleDropdownHandler = () => {
        setDropdown((curState) => {
            return !curState;
        });
    };

    return (
        <li class="relative group">
            {item.type === "link" ? (
                <>
                    <Link href={item.href} class="px-4 py-2">
                        {item.name}
                    </Link>
                    <span
                        class="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
                </>
            ) : (
                <div class="flex flex-col items-center">
                    <button
                        class="px-4 py-2 flex gap-x-1 items-center"
                        onClick={toggleDropdownHandler}
                    >
                        <span>{item.name}</span>
                        <FiChevronDown/>
                    </button>
                    <div
                        class={`${
                            dropdown() ? "block" : "hidden"
                        } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                    >
                        <ul class="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                            {item.items.map((page: {
                                href: string;
                                title: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined;
                            }) => (
                                <Link href={page.href}
                                    class="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </li>
    );
};

export default NavItem;
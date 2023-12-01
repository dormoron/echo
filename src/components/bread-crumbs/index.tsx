import {Link} from "@solidjs/router";
import {Component} from "solid-js";

export interface BreadCrumbProps {
    props:{
        link:string;
        name:string;
    }[]
}

const BreadCrumbs:Component<BreadCrumbProps> = ({props}) => {
    return (
        <div class="flex items-center py-4 overflow-x-auto whitespace-nowrap">
            {props.map((item, index) => (
                <div class="text-black opacity-50 text-xs font-roboto md:text-sm">
                    <Link href={item.link}>{item.name}</Link>
                    {index !== props.length - 1 && <span class="px-3">/</span>}
                </div>
            ))}
        </div>
    );
};

export default BreadCrumbs;

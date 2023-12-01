import {
    FaBrandsSquareFacebook,
    FaBrandsSquareTwitter,
    FaBrandsSquareReddit,
    FaBrandsSquareWhatsapp
} from "solid-icons/fa";
import {Component} from "solid-js";

export interface SocialShareButtonsProps {
    url:string;
    title:string;
}

const SocialShareButtons:Component<SocialShareButtonsProps> = ({ url, title }) => {
    return (
        <div class="w-full flex justify-between">
            <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.facebook.com/dialog/share?app_id=1180206992856877&display=popup&href=${url}`}
            >
                <FaBrandsSquareFacebook class="text-[#3b5998] w-12 h-auto" />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href={`https://twitter.com/intent/tweet?url=${url}`}
            >
                <FaBrandsSquareTwitter class="text-[#00acee] w-12 h-auto" />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href={`http://www.reddit.com/submit?url=${url}&title=${title}`}
            >
                <FaBrandsSquareReddit class="text-[#ff4500] w-12 h-auto" />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href={`https://api.whatsapp.com/send/?text=${url}`}
            >
                <FaBrandsSquareWhatsapp class="text-[#25D366] w-12 h-auto" />
            </a>
        </div>
    );
};

export default SocialShareButtons;

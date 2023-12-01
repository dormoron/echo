import { generateHTML } from "@tiptap/html";
import { extensions } from "@/constants/tiptapExtensions";
import {JSONContent} from "@tiptap/core";



const parseJsonToHtml = (json: JSONContent) => {
    return generateHTML(json, extensions);
};

export default parseJsonToHtml;

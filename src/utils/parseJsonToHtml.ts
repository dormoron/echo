import { generateHTML } from "@tiptap/html";
import { extensions } from "@/constants/tiptapExtensions";
import type { JSONContent } from "@tiptap/core";

/**
 * 将 TipTap JSON 内容转换为 HTML 字符串
 * 
 * @param json - TipTap 编辑器输出的 JSON 内容
 * @returns 转换后的 HTML 字符串
 * @throws 如果输入的 JSON 格式不正确或转换过程中发生错误
 */
const parseJsonToHtml = (json: JSONContent): string => {
  try {
    if (!json || typeof json !== 'object') {
      throw new Error('无效的 JSON 内容格式');
    }
    
    return generateHTML(json, extensions);
  } catch (error) {
    console.error('JSON 转 HTML 失败:', error);
    throw error;
  }
};

export default parseJsonToHtml;

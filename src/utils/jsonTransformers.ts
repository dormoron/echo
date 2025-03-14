import type { JSONContent } from '@tiptap/core';
import parseJsonToHtml from "./parseJsonToHtml";

/**
 * 将HTML内容转换为纯文本
 * 
 * @param html - HTML字符串
 * @returns 提取的纯文本内容
 */
export const htmlToText = (html: string): string => {
  if (!html) return '';
  
  try {
    // 创建临时DOM元素解析HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    // 获取文本内容并删除多余空格
    return tempDiv.textContent?.trim() || '';
  } catch (error) {
    console.error('HTML转文本失败:', error);
    return '';
  }
};

/**
 * 从TipTap JSON内容中提取纯文本
 * 
 * @param json - TipTap编辑器JSON内容
 * @returns 提取的纯文本内容
 */
export const jsonToText = (json: JSONContent): string => {
  try {
    // 先将JSON转为HTML，再提取文本
    const html = parseJsonToHtml(json);
    return htmlToText(html);
  } catch (error) {
    console.error('JSON转文本失败:', error);
    return '';
  }
};

/**
 * 截取TipTap JSON内容的摘要
 * 
 * @param json - TipTap编辑器JSON内容
 * @param maxLength - 摘要最大长度，默认100个字符
 * @returns 文本摘要
 */
export const getJsonContentSummary = (json: JSONContent, maxLength: number = 100): string => {
  const text = jsonToText(json);
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}; 
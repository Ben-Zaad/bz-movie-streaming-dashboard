import DOMPurify from 'dompurify';

export const sanitizeHTML = (html: string) => {
  return DOMPurify.sanitize(html);
};

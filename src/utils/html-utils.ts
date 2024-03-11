import DOMPurify from 'dompurify';

// Use to remove XSS risk when rendering external html
export const sanitizeHTML = (html: string) => {
  return DOMPurify.sanitize(html);
};

import { sanitizeHTML } from './html-utils';

describe('sanitizeHTML', () => {
  it('should sanitize HTML content', () => {
    // Input HTML with potentially unsafe content
    const unsafeHTML =
      '<script>alert("Hello, world!");</script>';

    // Call the sanitizeHTML function
    const sanitizedHTML = sanitizeHTML(unsafeHTML);

    // Assert that the sanitized HTML doesn't contain the script tag
    expect(sanitizedHTML).not.toContain('<script>');
    expect(sanitizedHTML).not.toContain(
      'alert("Hello, world!");'
    );
  });

  it('should handle empty input', () => {
    // Input an empty string
    const emptyHTML = '';

    // Call the sanitizeHTML function
    const sanitizedHTML = sanitizeHTML(emptyHTML);

    // Assert that the result is also an empty string
    expect(sanitizedHTML).toBe('');
  });

  it('should handle safe HTML content', () => {
    // Input HTML with safe content
    const safeHTML = '<p>Hello, world!</p>';

    // Call the sanitizeHTML function
    const sanitizedHTML = sanitizeHTML(safeHTML);

    // Assert that the sanitized HTML remains the same as the input
    expect(sanitizedHTML).toBe(safeHTML);
  });
});

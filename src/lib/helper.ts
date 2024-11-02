/**
 * 
 * @param email 
 * @returns 
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}

/**
 * 
 * @param str 
 * @returns 
 */
export function isValidURL(str: string): boolean {
  const pattern = new RegExp('^(https?://)'+ // protocol (http:// or https://)
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*'+ // port and path (updated to allow @)
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

  if (pattern.test(str)) {
    return true;
  } else {
    return false;
  }
}
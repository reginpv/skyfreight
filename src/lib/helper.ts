import { SUPER_ADMINS } from "@/config/constants";

/**
 * 
 * @param num 
 * @returns 
 */
export function isValidNumber(num: number) {
  if (typeof num !== 'number') {
      return false
  }
  // This logic will allow length minimum of 3
  return [0,1,2].includes(num)
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

/**
 * 
 * @param url 
 * @returns 
 */
export function isValidWazeUrl(url: string): boolean {
  //
  // Url that auto validate to waze app
  //
  // https://ul.waze.com/ul?preview_venue_id=79233173.792069583.22578885&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location

  const urlPattern1 = /^https:\/\/ul\.waze\.com\/ul\?preview_venue_id=\d+\.\d+\.\d+&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location$/

  return urlPattern1.test(url)
  
}

/**
 * 
 * @param file
 * 
 */
export function isValidFile(file: File|null|undefined): boolean {

  if (file && file.size) {
    return true;
  }

  return false;

}

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
 * @returns date
 */
export function formatDate(date:Date, returnType?: string) {
  //console.log(date)
  //date = new Date(date)
  // Get the year, month, and day from the originalDate
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  // Create the formatted date string in "YYYY-MM-DD" format
  let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:00`
  if(returnType=='dates') {
    formattedDate = `${year}-${month}-${day}`
  }
  if(returnType=='hours') {
    formattedDate = `${hours}:${minutes}`
  }
  return formattedDate


}

/**
 * 
 * @returns 
 */
export function formatDateForMySQLNow() {
  const now = new Date();
  const isoString = now.toISOString();
  return isoString;
}

/**
 * 
 * @param date 
 * @returns 
 */
export function formatDateToVCalendar(date:Date) {
  // Function to add leading zeros to single-digit numbers
  function addLeadingZero(num:any) {
    return num < 10 ? '0' + num : num;
  }

  // Get date components
  const year = date.getFullYear();
  const month = addLeadingZero(date.getMonth() + 1); // Months are zero-based
  const day = addLeadingZero(date.getDate());
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());

  // Create the VCalendar formatted string
  const vCalendarString = `${year}${month}${day}T${hours}${minutes}${seconds}`;

  return vCalendarString;
}

/**
 * 
 * @param date 
 * @returns 
 */
export function formatDateForHumans(date:string) {
  // Input date string
  const inputDateString:string = date

  // Parse the input date
  const inputDate = new Date(inputDateString)

  // Define months array for formatting
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Format the output date string
  const outputDateString = months[inputDate.getMonth()] + " " + inputDate.getDate() + ", " + inputDate.getFullYear()

  // Output the result
  return outputDateString

}

/**
 * 
 * @param {string} url - waze url
 * @returns 
 */
export function extractLatLongFromURL(url:string) {
  
  // Split the URL by '?' to get the query parameters
  const queryString = url ? url.split('?')[1] : ''

  if (queryString) {
    // Split the query string by '&' to get individual key-value pairs
    const queryParams = queryString.split('&');

    // Loop through the key-value pairs to find the one containing "ll"
    for (const param of queryParams) {
      const [key, value] = param.split('=');
      if (key === "ll") {
        // "ll" parameter found, split it by ',' to get latitude and longitude
        const [latitude, longitude] = value.split('%2C');
        return [ parseFloat(latitude), parseFloat(longitude)]
      }
    }
  }

  // Return null if "ll" parameter is not found
  return []
}

/**
 * 
 */
export function isCustomer(role: string) {

  const admins = ['1']

  return admins.includes(role)

}

/**
 * 
 * @param role
 * @returns 
 */
export function isAdmin(role: string) {

  const admins = ['8', '9']

  return admins.includes(role)

}

/**
 * 
 */
export function isSuperadmin(role: string) {

  const superadmins = ['9']

  return superadmins.includes(role)

}

/**
 * 
 * @param phone 
 * @returns boolean
 */
export function isValidPhone(phone:string) {

  return /^\d{6,10}$/.test(phone)

}

/**
 * 
 * @param str 
 * @returns 
 */
export function isBase64(str:string) {
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    console.log(`Error: ${err}`)
    return false;
  }
}


/**
 * 
 * UUID
 */
export function generateUUID() {
  var d = new Date().getTime();
  var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;
      if(d > 0){
          var r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {
          var r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c=='x' ? r : (r&0x7|0x8)).toString(16);
  });
  return uuid;
}


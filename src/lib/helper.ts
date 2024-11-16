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
 * @param id 
 * @returns 
 */
export function isAdmin(id:number) {

  // reginpv@gmail.com = 1
  // qrcodeph@gmail.com = 
  const admins = [1, 39]

  return admins.includes(id)

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
 * 
 */
export function blobToBase64(blob: Blob, callback: (base64String: string) => void): void {
  const reader = new FileReader()
  reader.onloadend = function () {
    if (typeof reader.result === 'string') {
      const base64String = reader.result
      callback(base64String)
    }
  };
  reader.readAsDataURL(blob)
}

/**
 * 
 * 
 */
export async function urlToBase64(url:string) {

  //console.log('running urlToBase64', `${url}?=${new Date().toISOString()}`)

  if(!url || url === undefined) return

  const res = await fetch(`${url}?=${new Date().toISOString()}`, {
    cache: "no-store"
  })
  const d = await res.blob()

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onloadend = function () {
      if (typeof reader.result === 'string') {
        const base64String = reader.result
        resolve(base64String)
      } else {
        reject(new Error("Failed to convert blob to base64"))
      }
    }

    reader.onerror = function() {
      reject(new Error("Error reading the blob"))
    }

    reader.readAsDataURL(d)

  })

}

/**
 * 
 * 
 */
export async function handleUrlToBase64(url:string) {
  const res = await urlToBase64(url)
  return res
}

/**
 * 
 * 
 */
export function generateQrcodeContent(qrcode: any){

  const { type } = qrcode
  let content

  // Mecard only
  if(type==='mecard') {

    // Can't destructure this
    const fname = qrcode.mecard?.fname
    const lname = qrcode.mecard?.lname
    const mobile = qrcode.mecard?.mobile
    const email = qrcode.mecard?.email

    // Update data content
    content = `MECARD:N:${fname} ${lname};TEL:${mobile};EMAIL:${email};;`
    
  }

  // URL only
  if(type==='url') {

    // Can't destructure this
    const url = qrcode.url?.url

    // Update data content
    content = `${url}`
    
  }

  // Waze only
  if(type==='waze') {

    // Can't destructure this
    const wazeurl = qrcode.waze?.wazeurl

    // Update data content
    content = `${wazeurl}`
      
  }

  // Wifi only
  if(type==='wifi') {

    // Can't destructure this
    const ssid = qrcode.wifi?.ssid
    const pass = qrcode.wifi?.pass 
    const security = qrcode.wifi?.security

    content = `WIFI:S:${ssid};T:${security};P:${pass};;`
      
  }

  // Event only
  if(type==='event') {

    // Can't destructure this
    const name = qrcode.event?.name 
    const location = qrcode.event?.location
    const start = qrcode.event?.start
    const end = qrcode.event?.end 
    const description = qrcode.event?.description

    // Update data content
    const vcalendarStart = formatDateToVCalendar(new Date(start))
    const vcalendarEnd = formatDateToVCalendar(new Date(end))

    content = `BEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nBEGIN:VEVENT\nDTSTART:${vcalendarStart}\nDTEND:${vcalendarEnd}\nLOCATION:${location}\nSUMMARY:${name}\nDESCRIPTION:${description?.replace(/\n/g, ' ')}\nEND:VEVENT\nEND:VCALENDAR`

  }

  // Whatsapp
  if(type==='whatsapp') {

    // Can't destructure this
    const phone = qrcode.whatsapp?.phone
    const country = qrcode.whatsapp?.country

    // Update data content
    content = `https://wa.me/${country}${phone}`

  }

  // File only
  if(type==='file') {

    // Can't destructure this
    const { file } = qrcode.file

    // Update data content
    content = `${file}`
    
  }

  return content
}
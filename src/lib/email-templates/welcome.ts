export function emailTemplateWelcome(data: {email: string, name: string }): string {

  const  { email, name } = data

  return `<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <style type="text/css">
        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #f4f4f4;
          line-height: 180%;
          font-size: 16px;
          color: #333333;
        }
        .re {
          margin: auto;
          background: #ffffff;
        }
        @media only screen and (max-width: 480px){
          .re,
          .re tbody,
          .re tbody tr {
            margin: auto;
            width: 100%;
            display: block;
          }
          .re__column {
            width:100% !important;
            display: block;
          }
          .re__image{
            height:auto !important;
            max-width:480px !important;
            width:100% !important;
          }
  
          .default,
          .default tbody {
            display: table;
          }
          .default tbody tr {
            margin: auto;
            width: 100%;
            display: table-row;
          }
        }
      </style>
      <title>Title</title>
    </head>
    <body style="background: #f4f4f4; padding-top: 60px; padding-bottom: 30px; padding-left: 15px; padding-right: 15px; font-size: 16px; color: #333333;">
      <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; border-radius: 20px;" class="re">
        <!-- Content -->
        <tr align="center" valign="top" width="100%" class="re__column">
          <td style="padding-top: 30px;">
            <table border="0" cellpadding="10" cellspacing="0" width="100%" class="default">
              <tr>
                <td align="center">
                  <h3 style="margin: 0; text-transform: uppercase; color: #443636; font-weight: bold;">QRCODEPH</h3>
                </td>
              </tr>
            </table>
  
            <table border="0" cellpadding="30" cellspacing="0" width="100%" class="default">
              <tr>
                <td align="left" style="color:#333333;">
                  <p>Hello ${name} (${email}),</p>
                  <p>Welcome to <strong>QRCODEPH</strong>! We are thrilled to have you on board, and we appreciate your registration.</p>
                  <p>Your journey with <strong>QRCODEPH</strong> is about to begin, and we're here to guide you every step of the way. Whether you're a business owner looking to enhance your marketing efforts or an individual who loves to share information in a creative way, our app is here to simplify QR code creation and management for you.</p>
                  <p>Here are a few key features you can look forward to:</p>
                  <ul>
                    <li>
                      <strong>QR Code Generator:</strong><br />Easily create customized QR codes for websites, contact details, events, Wi-Fi networks, and more.
                      QR Code Management: Keep track of all your generated QR codes in one place. Edit and update them as needed.
                    </li>
                    <li>
                      <strong>Analytics:</strong><br />Monitor the performance of your QR codes and gain valuable insights into user interactions.
                    </li>
                    <li>
                      <strong>QR Code Customization:</strong><br />
                      Customize the appearance of your QR codes with colors, logos, and additional design options.
                    </li>
                    <li>
                      <strong>Secure and Reliable:</strong><br />Rest assured that your data and QR codes are safe with us. We take security seriously.
                    </li>
                  </ul>
                  <p>To get started, follow these simple steps:</p>
                  <ul>
                    <li>
                      <strong>Login to Your Account:</strong><br />Visit <a href="https://qrcodeph.com/login">www.qrcodeph.com/login</a> and use your registered email and password to log in.
                    </li>
                    <li>
                      <strong>Create Your First QR Code:</strong><br />Click on the "Create QR Code" button and choose the type of QR code you want to generate.
                    </li>
                    <li>
                      <strong>Customize Your QR Code:</strong><br />Add your information, choose colors, and personalize your QR code to make it unique.
                    </li>
                    <li>
                      <strong>Download or Share:</strong><br />Once your QR code is ready, you can download it in various formats or share it directly.</li>
                  </ul>
                  <p>If you have any questions or encounter any issues, don't hesitate to reach out to our support team at hello@qrcodeph.com or visit our Help Center at <a href="https://qrcodeph.com/faq">www.qrcodeph.com/faq</a>. We are here to assist you.</p>
                  <p>Stay tuned for exciting updates and new features that we'll be rolling out in the near future. We are committed to providing you with the best QR code experience possible.
                  </p>
                  <p>Thank you for choosing QRCODEPH! We look forward to being part of your QR code journey.</p>
                </td>
              </tr>
            </table>
  
            
          </td>
        </tr>    
        <!-- Footer -->
        <tr>
          <td align="center" valign="top" width="100%" class="re__column" style="padding-bottom: 15px;">
          </td>
        </tr>
      </table>
      
      
  
      <!-- Outside footer-->
      <table cellpadding="0" cellspacing="0" style="margin: auto; text-align: center;">
        <tr>
          <td style="text-align: center;">
            <a href="https://www.facebook.com/profile.php?id=100089609196525"><img src="https://qrcodeph.com/images/icon-facebook.png" alt="Qr code ph Facebook" width="32" height="32" style="display: inline-block; margin: 20px auto 10px;" /></a>&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/company/qrcodeph"><img src="https://qrcodeph.com/images/icon-linkedin.png" alt="Qr code ph Linkedin" width="32" height="32" style="display: inline-block; margin: 20px auto 10px;" /></a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center; font-size: 14px;">
            <p style="margin:0;">Copyright &copy; 2024 QRCODEPH</p>
          </td>
        </tr>
      </table>
    </body>
  </html>`
}
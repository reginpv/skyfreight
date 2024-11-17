import { Metadata } from 'next'
import TemplateDefault from '@/components/templates/Default'
import { PUBLIC_EMAIL, PUBLIC_SITENAME } from '@/config/constants'

export const metadata: Metadata = {
  title: `Privacy Policy - Free QR Code Generator ${PUBLIC_SITENAME}`,
  description: 'Learn about our data collection and usage practices, and your privacy rights as a user of our QR code generator website.',
  keywords: ['privacy policy']
}

export default function PrivacyPolicy() {

  return (
    <TemplateDefault>
      <section className="px-page py-10">
        <div className="section__container container container--custom">
          <div className="section__content content flex flex-col gap-5">
            
            <div>
              <h1 className="mb-2">Privacy Policy</h1>
              <p className="small">Last updated: November 17, 2024</p>
            </div>

            <div className="text-[#555]">
              
              <p>At <strong>{PUBLIC_SITENAME}</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.</p>

              <p className="font-bold mb-0">Information We Collect</p>
              <p>When you use our website we may collect the following information:</p>
              <ul className="list-disc ml-5 mb-5">
                <li>Names</li>
                <li>Addresses</li>
                <li>Contact numbers</li>
                <li>URL links</li>
                <li>Telephone numbers</li>
                <li>Event details</li>
                <li>Uploaded files</li>
              </ul>

              <p className="font-bold mb-0">How We Use Your Information</p>
              <p>The information collected is used solely for managing your order and account and for improving the functionality and user experience of our website.</p>

              <p className="font-bold mb-0">Information Sharing and Disclosure</p>
              <p>We do not share or disclose your personal information with third parties without your explicit consent, except as required by law or necessary to protect the safety of our users or the public.</p>

              <p className="font-bold mb-0">Security Measures</p>
              <p>We take reasonable precautions to safeguard your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of online transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

              <p className="font-bold mb-0">Updates to This Privacy Policy</p>
              <p>We may periodically update this Privacy Policy. If any changes are made, the “Last Updated” date at the top of this policy will be revised.</p>

              <p className="font-bold mb-0">Contact Us</p>
              <p>If you have any questions or concerns regarding this Privacy Policy or how we handle your personal information, please contact us at <a className="underline" href={`mailto:${PUBLIC_EMAIL}`}>{PUBLIC_EMAIL}</a>.</p>
            </div>

          </div>
        </div>
        

      </section>
    </TemplateDefault>
  )
}
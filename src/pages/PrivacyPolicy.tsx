const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0B0B0B] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-[#94A3B8]">
          <section className="mb-8">
            <p className="mb-4">
              This Privacy Policy explains how information is collected, used, and protected when you visit my 
              personal portfolio website ("Website"), created and managed by Sunkesula Vijay Kumar ("I", "me", or "my").
            </p>
            <p>
              By accessing or using this Website, you agree to the terms outlined in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information I Collect</h2>
            <p className="mb-4">
              This Website is primarily for viewing purposes and does not actively collect personal data unless 
              voluntarily provided by you. The only ways information may be collected include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium text-white">Contact Form Submissions:</span> If you reach out via a 
                contact form, I may collect your name, email address, and message content.
              </li>
              <li>
                <span className="font-medium text-white">Analytics Tools:</span> I may use tools like Google 
                Analytics or similar services to understand website traffic (e.g., pages visited, device type, 
                country). This data is anonymous and cannot identify you personally.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How Your Information is Used</h2>
            <p className="mb-4">Any personal information you provide is used only to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries or messages</li>
              <li>Improve the Website's performance or user experience</li>
              <li>Maintain the Website's functionality and content</li>
            </ul>
            <p className="mt-4">I do not sell, rent, or share your information with third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies</h2>
            <p>
              This Website may use cookies (small files stored on your device) to enhance functionality or analytics. 
              You can disable cookies in your browser settings if you prefer not to use them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. External Links</h2>
            <p>
              This Website may include links to other websites (e.g., GitHub, LinkedIn, external blogs). I am not 
              responsible for the content or privacy practices of those external sites. Please review their 
              respective privacy policies if you choose to visit them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p>
              I take reasonable steps to protect the information shared via this Website. However, as this is a 
              public portfolio site hosted on third-party services (like GitHub Pages, Vercel, or Netlify), I cannot 
              guarantee complete security of information shared over the internet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Children's Privacy</h2>
            <p>
              This Website is not intended for children under the age of 13. I do not knowingly collect or store 
              personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              This Privacy Policy may be updated from time to time. Any changes will be posted on this page with a 
              revised "Last Updated" date. Continued use of the Website means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please reach out via{' '}
              <a 
                href="mailto:sunkesulaavijaykumarr@gmail.com"
                className="text-[#4F46E5] hover:text-[#4338CA] transition-colors"
              >
                email
              </a>
              {' '}or through the Contact section of the Website.
            </p>
          </section>

          <p className="text-sm mt-12">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 
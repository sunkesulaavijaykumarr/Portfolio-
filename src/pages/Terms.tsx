
const Terms = () => {
  return (
    <div className="bg-[#0B0B0B] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Use</h1>
        
        <div className="space-y-8 text-[#94A3B8]">
          <section className="mb-8">
            <p className="mb-4">
              These Terms of Use govern your access to and use of this personal portfolio website ("Website"), 
              created and maintained by Sunkesula Vijay Kumar ("Owner", "I", "me", or "my").
            </p>
            <p className="mb-4">
              By accessing or using this Website, you ("User", "You", or "Your") agree to be bound by these Terms. 
              If you do not agree to these Terms, please do not use the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Purpose of the Website</h2>
            <p>
              This Website is intended solely for showcasing my personal work, academic projects, technical skills, 
              resume, and career-related information. It may also include blog posts, downloadable resources, or 
              contact details for professional networking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Intellectual Property</h2>
            <p className="mb-4">
              All content on this Website, including code samples, project descriptions, graphics, logos, and written 
              material, is the intellectual property of Sunkesula Vijay Kumar, unless otherwise stated.
            </p>
            <p>
              You may not copy, reproduce, distribute, or use any content from this Website for commercial purposes 
              without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Acceptable Use</h2>
            <p className="mb-4">By using this Website, you agree:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Not to misuse or attempt to compromise the security or functionality of the Website</li>
              <li>Not to upload malicious content or spam via contact forms or other means</li>
              <li>To respect the personal and academic nature of the content displayed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Links</h2>
            <p>
              This Website may contain links to external websites, tools, or resources (e.g., GitHub, LinkedIn, or 
              external blog platforms). I am not responsible for the content or accuracy of third-party sites and do 
              not endorse or guarantee their services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Privacy</h2>
            <p>
              This Website does not actively collect personal information unless submitted voluntarily via contact 
              forms (e.g., name, email). Any information you share will be used solely for responding to inquiries 
              and will not be shared or sold to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Disclaimer</h2>
            <p>
              All content is provided for informational and presentation purposes only. While I strive to ensure 
              accuracy, I make no warranties regarding the completeness or reliability of the information. Use this 
              site at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to the Terms</h2>
            <p>
              These Terms may be updated occasionally. By continuing to use the Website after changes are made, you 
              agree to be bound by the updated terms. You are advised to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact</h2>
            <p>
              If you have any questions regarding these Terms or wish to report an issue, feel free to contact me via{' '}
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

export default Terms; 
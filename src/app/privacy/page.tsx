export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              This privacy policy applies to the Todo app (hereby referred to as "Application") for mobile devices that was created by Kaelen (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              What information does the Application obtain and how is it used?
            </h2>
            <p>
              The Application does not obtain any information when you download and use it. Registration is not required to use the Application.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Does the Application collect precise real time location information of the device?
            </h2>
            <p>
              This Application does not collect precise information about the location of your mobile device.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Do third parties see and/or have access to information obtained by the Application?
            </h2>
            <p>
              Since the Application does not collect any information, no data is shared with third parties.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              What are my opt-out rights?
            </h2>
            <p>
              You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Children
            </h2>
            <p>
              The Application is not used to knowingly solicit data from or market to children under the age of 13.
            </p>
            <p>
              The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (kaelen.hou@gmail.com) so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Security
            </h2>
            <p>
              The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Changes
            </h2>
            <p>
              This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
            </p>
            <p>
              This privacy policy is effective as of 2025-08-27
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Your Consent
            </h2>
            <p>
              By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at{" "}
              <a href="mailto:kaelen.hou@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                kaelen.hou@gmail.com
              </a>
            </p>

            <hr className="my-8 border-gray-200" />
            
            <p className="text-sm text-gray-500">
              This privacy policy page was generated by{" "}
              <a 
                href="https://app-privacy-policy-generator.nisrulz.com/" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Privacy Policy Generator
              </a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
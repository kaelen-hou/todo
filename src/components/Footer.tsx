export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users and experience the most intuitive and efficient task management tool. Start now, completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Free
            </button>
            <button className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-300 hover:text-white transition-colors">
              Download Mobile App
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">TodoApp</h3>
            <p className="text-gray-400 mb-4">
              Make task management simple and efficient, focus on what really matters.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.002.058-.008.113-.008.113v.035c-.03.027-.067.059-.067.059l-.008-.035c-.027-.058-.059-.113-.096-.168a.184.184 0 00-.027-.035c-.036-.058-.078-.113-.125-.164v-.004c-.047-.047-.098-.09-.152-.129-.027-.02-.055-.039-.086-.055a.986.986 0 00-.172-.086.179.179 0 00-.035-.008c-.059-.016-.121-.027-.184-.031h-.008c-.063-.004-.125-.004-.188.004h-.004c-.063.008-.125.02-.184.035h-.008c-.059.016-.117.035-.172.059-.027.012-.055.027-.082.043a1.01 1.01 0 00-.156.098c-.027.02-.051.043-.078.066-.047.043-.09.09-.129.141-.02.027-.039.055-.055.086-.031.055-.059.113-.082.172-.008.027-.016.055-.02.082-.016.059-.027.121-.031.184v.008c-.004.063-.004.125.004.188v.004c.008.063.02.125.035.184.004.012.008.027.008.035.016.059.035.117.059.172.012.027.027.055.043.082.031.055.066.109.105.156.02.027.043.051.066.078.043.047.09.09.141.129.027.02.055.039.086.055.055.031.113.059.172.082.027.008.055.016.082.02.059.016.121.027.184.031h.008c.063.004.125.004.188-.004h.004c.063-.008.125-.02.184-.035.012-.004.027-.008.035-.008.059-.016.117-.035.172-.059.027-.012.055-.027.082-.043a1.01 1.01 0 00.156-.098c.027-.02.051-.043.078-.066.047-.043.09-.09.129-.141.02-.027.039-.055.055-.086.031-.055.059-.113.082-.172.008-.027.016-.055.02-.082.016-.059.027-.121.031-.184v-.008c.004-.063.004-.125-.004-.188v-.004a1.935 1.935 0 00-.035-.184c-.004-.012-.008-.027-.008-.035a1.854 1.854 0 00-.059-.172 1.01 1.01 0 00-.043-.082 1.935 1.935 0 00-.105-.156 1.01 1.01 0 00-.066-.078 1.935 1.935 0 00-.141-.129 1.01 1.01 0 00-.086-.055 1.935 1.935 0 00-.172-.082 1.01 1.01 0 00-.082-.02z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status Page</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Notiving. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className="bg-gray-800 text-white p-8 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ChitChat</h3>
          <p className="text-gray-400">
            Simplifying creative asset review and collaboration.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            123 Creative Lane, Art City, AC 12345
          </p>
          <p className="text-gray-400">info@chitchat.com</p>
          <p className="text-gray-400">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} ChitChat. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
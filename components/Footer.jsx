import React from 'react';
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="bg-gray-800 py-8 mt-16">
			<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
				<div className="text-center md:text-left">
					<h2 className="font-playfair text-2xl text-white font-semibold mb-2">
						Kamkaa
					</h2>
					<p className="font-poppins text-white">
						Your gateway to luxury living in Lagos.
					</p>
				</div>

				<div className="flex space-x-6 mt-4 md:mt-0">
					<a
						href="https://www.facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-white transition duration-200"
					>
						<FaFacebookF size={24} />
					</a>
					<a
						href="https://www.twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-white transition duration-200"
					>
						<FaTwitter size={24} />
					</a>
					<a
						href="https://www.instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-white transition duration-200"
					>
						<FaInstagram size={24} />
					</a>
					<a
						href="https://www.linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-white transition duration-200"
					>
						<FaLinkedinIn size={24} />
					</a>
				</div>
			</div>
			<div className="text-center mt-4">
				<p className="font-poppins text-white">
					&copy; {new Date().getFullYear()} Kamkaa. All
					rights reserved.
				</p>
			</div>
		</footer>
	);
}

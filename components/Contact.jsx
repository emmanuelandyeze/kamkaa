import React from 'react';

export default function ContactUsSection() {
	return (
		<section className="max-w-7xl mx-auto px-4 pt-16">
			<section className="flex flex-col justify-center items-center h-20 pt-10 pb-20">
				<h2 className="font-playfair text-4xl md:text-5xl text-kamkaaGold font-semibold">
					<span className="text-gray-800">Our </span>
					Location
				</h2>
				{/* Decorative Lines */}
				<div className="flex items-center mt-4">
					<span className="block w-16 h-[2px] bg-kamkaaGold"></span>
					<span className="block w-6 h-[2px] mx-2 bg-gray-800"></span>
					<span className="block w-16 h-[2px] bg-kamkaaGold"></span>
				</div>
			</section>
			<div className="flex flex-col md:flex-row justify-between items-start mb-8">
				{/* Contact Information */}
				<div className="w-full md:w-1/3 mb-8 md:mb-0">
					<h3 className="font-poppins text-xl text-gray-700 mb-4">
						Get in Touch
					</h3>
					{/* <p className="font-poppins text-gray-700 mb-2">
						<strong>Email:</strong> info@kamkaa.com
					</p> */}
					<strong>Phone</strong>
					<p className="font-poppins text-gray-700 mb-2">
						+234 915 266 5302
					</p>
					<p className="font-poppins text-gray-700 mb-2">
						+234 816 815 4854
					</p>
					<p className="font-poppins text-gray-700 mb-2">
						+234 802 303 5567
					</p>
					<strong>Address</strong>
					<p className="font-poppins text-gray-700 mb-2">
						2, Oremeji Close, Ojokoro, Off Bioyin St,
						Ifako-Ijaiye, Lagos
					</p>
				</div>

				{/* Map */}
				<div className="w-full md:w-2/3 h-96">
					<iframe
						src="https://www.openstreetmap.org/export/embed.html?bbox=3.285083770751953%2C6.675615433905576%2C3.295812606811524%2C6.683181204176674&amp;layer=mapnik&amp;marker=6.679399205929269%2C3.2904439999999795"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						title="Kamkaa Location"
					></iframe>
				</div>
			</div>
		</section>
	);
}

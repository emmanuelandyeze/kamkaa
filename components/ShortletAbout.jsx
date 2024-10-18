import Link from 'next/link';
import React from 'react';

export default function ShortletsAboutSection() {
	return (
		<section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
			{/* Image on the left */}
			<div className="md:w-1/2 mb-8 md:mb-0">
				<img
					src="/house/0S2A3037.jpg" // Replace with actual image path
					alt="Shortlet Apartment"
					className="rounded-lg shadow-lg w-full h-auto"
				/>
			</div>

			{/* Text Content on the right */}
			<div className="md:w-1/2 md:pl-8">
				<h2 className="font-playfair text-3xl text-kamkaaGold font-semibold mb-4">
					Discover Our Shortlets
				</h2>
				<p className="font-poppins text-gray-700 mb-4">
					Experience the perfect blend of comfort and
					convenience in our luxurious shortlet apartments.
					Located in the heart of Lagos, each apartment is
					designed to provide a home-away-from-home
					experience with modern amenities and stylish
					interiors. Whether you're in town for business or
					leisure, our shortlets offer a unique and
					personalized stay that caters to your every need.
				</p>
				<p className="font-poppins text-gray-700 mb-4">
					Enjoy easy access to popular attractions, dining,
					and entertainment options. Relax in spacious
					living areas, unwind in cozy bedrooms, and enjoy
					fully-equipped kitchens to make your stay as
					comfortable as possible.
				</p>
				{/* <p className="font-poppins text-gray-700 mb-4">
					At Kamkaa, we prioritize your satisfaction and aim
					to create memorable experiences for all our
					guests. Book your shortlet today and discover the
					best that Lagos has to offer!
				</p> */}
				<Link
					href={'https://wa.me/2349152665302'}
					className="mt-4 px-6 py-3 bg-kamkaaGold text-black font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
				>
					Book Now
				</Link>
			</div>
		</section>
	);
}

import React from 'react';

const images = [
	'/hotel/0S2A3270.jpg',
	'/hotel/0S2A3254.jpg',
	'/hotel/0S2A3351.jpg',
	'/hotel/0S2A3321.jpg',
	'/hotel/0S2A3258.jpg',
	'/hotel/0S2A3390.jpg',
	'/hotel/0S2A3517.jpg',
	'/hotel/0S2A3529.jpg',
	'/hotel/0S2A3558.jpg',
	'/hotel/0S2A3548.jpg',
	'/hotel/0S2A3270.jpg',
	'/hotel/0S2A3656.jpg',
];

export default function GallerySection() {
	return (
		<section className="max-w-7xl mx-auto px-4 py-4">
			<section className="flex flex-col justify-center items-center h-20 pt-10 pb-20">
				<h2 className="font-playfair text-4xl md:text-5xl text-kamkaaGold font-semibold">
					<span className="text-gray-50">Our </span>
					Gallery
				</h2>
				{/* Decorative Lines */}
				<div className="flex items-center mt-4">
					<span className="block w-16 h-[2px] bg-kamkaaGold"></span>
					<span className="block w-6 h-[2px] mx-2 bg-white"></span>
					<span className="block w-16 h-[2px] bg-kamkaaGold"></span>
				</div>
			</section>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
				{images.map((image, index) => (
					<div
						key={index}
						className="overflow-hidden rounded-md shadow-lg transition-transform duration-300 hover:scale-105"
					>
						<img
							src={`${image}`} // Ensure the images are served from the public folder
							alt={`Gallery Image ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>
		</section>
	);
}

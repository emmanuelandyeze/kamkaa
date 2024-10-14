import React from 'react';

const images = [
	'/house/0S2A3037.jpg',
	'/house/0S2A3081.jpg',
	'/house/0S2A3098.jpg',
	'/house/0S2A3097.jpg',
	'/house/0S2A3120.jpg',
	'/house/0S2A3126.jpg',
	'/house/0S2A3131.jpg',
	'/house/0S2A3170.jpg',
	'/house/0S2A3177.jpg',
	'/house/0S2A3191.jpg',
	'/house/0S2A3198.jpg',
	'/house/0S2A3235.jpg',
	'/house/0S2A3238.jpg',
	'/house/0S2A3185.jpg',
	'/house/0S2A3086.jpg',
	'/house/0S2A3051.jpg',
];

export default function ShortletGallerySection() {
	return (
		<section className="max-w-7xl mx-auto px-4 pt-4 pb-10">
			<section className="flex flex-col justify-center items-center h-20 pt-10 pb-20">
				<h2 className="font-playfair text-4xl md:text-5xl text-kamkaaGold font-semibold">
					<span className="text-gray-50">Shortlets </span>
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

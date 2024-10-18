'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
	'/hotel/0S2A3313.jpg',
	'/hotel/0S2A3348.jpg',
	'/hotel/0S2A3505.jpg',
	'/hotel/0S2A3603.jpg',
	'/hotel/0S2A3651.jpg',
];

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) =>
				prev === images.length - 1 ? 0 : prev + 1,
			);
		}, 5000); // Change slide every 5 seconds
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative w-full h-96 md:h-screen">
			{/* Image Background */}
			{images.map((image, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
						index === currentSlide
							? 'opacity-100'
							: 'opacity-0'
					}`}
				>
					<img
						src={image}
						alt={`Slide ${index + 1}`}
						className="w-full h-full object-cover"
					/>
					{/* Dark Overlay */}
					<div className="absolute inset-0 bg-black bg-opacity-70"></div>
				</div>
			))}

			{/* Text Overlay */}
			<div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
				<h1 className="font-playfair uppercase text-3xl md:text-5xl font-bold">
					Experience Luxury in Lagos
				</h1>
				<p className="font-poppins text-lg md:text-2xl mt-4">
					Discover the finest hotel and shortlets at Kamkaa
				</p>
				<Link
					href={'https://wa.me/2349152665302'}
					target='_blank'
					className="mt-6 px-6 py-3 bg-kamkaaGold text-black font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
				>
					Book Now
				</Link>
			</div>
		</section>
	);
}

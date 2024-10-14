export default function AboutSection() {
	return (
		<section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
			{/* Left: Image */}
			<div className="w-full md:w-1/2 mb-8 h-full md:mb-0">
				<img
					src="/hotel/0S2A3270.jpg"
					alt="About Kamkaa"
					className="w-full h-full object-cover rounded-lg shadow-lg"
				/>
			</div>

			{/* Right: Text & CTA */}
			<div className="w-full md:w-1/2 md:pl-12 text-left md:text-left">
				<p className="">ABOUT US</p>
				<h2 className="font-playfair text-3xl md:text-4xl text-kamkaaGold font-semibold mb-4">
					The Most Preferred Hotel in Lagos
				</h2>
				<p className="font-poppins text-gray-700 text-lg md:text-md mb-4">
					At Kamkaa, we redefine luxury living by offering
					the finest hotels, suites, and shortlet apartments
					in Lagos. Our properties are designed to provide
					comfort, elegance, and unmatched hospitality,
					ensuring that your stay with us is both relaxing
					and memorable.
				</p>
				<p className="font-poppins text-gray-700 text-lg md:text-md mb-4">
					We pride ourselves on our commitment to quality
					and customer satisfaction. Every detail of our
					accommodations is meticulously curated to meet the
					needs of our guests, whether you're traveling for
					business or leisure. Our dedicated staff is always
					on hand to ensure your experience is seamless.
				</p>
				{/* <p className="font-poppins text-gray-700 text-lg mb-4">
					Kamkaa embodies the essence of Lagos living,
					offering you a unique blend of local culture and
					modern amenities. Discover vibrant neighborhoods,
					exquisite dining options, and exciting
					attractions, all just moments away from your
					doorstep.
				</p> */}
				{/* <p className="font-poppins text-gray-700 text-lg mb-6">
					Whether you're here for a short stay or a long
					vacation, Kamkaa is your perfect getaway in the
					bustling heart of Lagos.
				</p> */}
				<button className="mt-4 px-6 py-3 bg-kamkaaGold text-black font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition duration-300">
					Book Now
				</button>
			</div>
		</section>
	);
}

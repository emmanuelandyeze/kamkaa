export default function WelcomeSection() {
	return (
		<section className="flex flex-col justify-center items-center h-20 pt-20 pb-5 bg-white">
			<h2 className="font-playfair text-4xl md:text-5xl text-kamkaaGold font-semibold">
				<span className="text-gray-800">Welcome to </span>
				Kamkaa
			</h2>
			{/* Decorative Lines */}
			<div className="flex items-center mt-4">
				<span className="block w-16 h-[2px] bg-kamkaaGold"></span>
				<span className="block w-6 h-[2px] mx-2 bg-black"></span>
				<span className="block w-16 h-[2px] bg-kamkaaGold"></span>
			</div>
		</section>
	);
}

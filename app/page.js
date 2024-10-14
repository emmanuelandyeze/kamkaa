import AboutSection from '@/components/About';
import ContactUsSection from '@/components/Contact';
import GallerySection from '@/components/Gallery';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import WelcomeSection from '@/components/Welcome';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="pt-14">
			<Hero />
			<WelcomeSection />
			<AboutSection />
			<div className="bg-gray-800">
				<GallerySection />
			</div>
			<ContactUsSection />
		</div>
	);
}

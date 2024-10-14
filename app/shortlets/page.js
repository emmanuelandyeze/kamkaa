import ContactUsSection from '@/components/Contact';
import ShortletsAboutSection from '@/components/ShortletAbout';
import ShortletGallerySection from '@/components/ShortletGallery';
import ShortletHero from '@/components/ShortletHero';
import ShortletWelcomeSection from '@/components/ShortletWelcome';
import React from 'react';

const page = () => {
	return (
		<div className="pt-14">
			<ShortletHero />
			<ShortletWelcomeSection />
			<ShortletsAboutSection />
			<div className="bg-gray-800">
				<ShortletGallerySection />
			</div>
			<ContactUsSection />
		</div>
	);
};

export default page;

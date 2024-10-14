import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Kamkaa - Luxury Hotel & Shortlets',
	description: 'Experience the best of Lagos hospitality.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-poppins">
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

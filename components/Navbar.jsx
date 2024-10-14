'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Hotels & Suites', href: '/hotels-and-suites' },
		{ name: 'Shortlets', href: '/shortlets' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Gallery', href: '/gallery' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<header className="bg-white fixed w-full text-black z-40 shadow p-4">
			<nav className="flex justify-between items-center max-w-7xl mx-auto">
				<ul className="hidden md:flex space-x-10">
					{navItems?.slice(0, 3).map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								className={`${
									pathname === item.href
										? 'text-kamkaaGold font-semibold border-b-2 border-kamkaaGold'
										: 'text-gray-600 hover:text-black'
								} pb-1`}
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
				<img
					src="/kamkaa2.png"
					className="h-10 w-24 md:h-12 md:w-28"
					alt=""
				/>
				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-10">
					{navItems?.slice(3, 6).map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								className={`${
									pathname === item.href
										? 'text-kamkaaGold font-semibold border-b-2 border-kamkaaGold'
										: 'text-gray-600 hover:text-black'
								} pb-1`}
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
				{/* Mobile Menu Button */}
				<button className="md:hidden" onClick={toggleMenu}>
					<CiMenuFries size={24} />
				</button>
			</nav>
			{/* Mobile Menu */}
			<div
				className={`${
					isOpen ? 'block' : 'hidden'
				} md:hidden`}
			>
				<ul className="space-y-4 p-4">
					{navItems.map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								className={`${
									pathname === item.href
										? 'text-kamkaaGold font-semibold'
										: 'text-gray-600 hover:text-black'
								}`}
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Navbar;

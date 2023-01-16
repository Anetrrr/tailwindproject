import React, { useState } from 'react';
import { Link as Link1 } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className="block w-full mb-22">
			<div className="font-roboto bg-black p-2  text-white h-[50px] w-full">
				ANETOR's.
				<Link2 to="/featuredapps/jokes">
					{' '}
					<button className=" float-right p-1 text-center text-white bg-transparent text-[14px]">
						FeaturedApp
					</button>
				</Link2>
			</div>
			<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-black sticky top-0">
				<Link2 to="/">
					{' '}
					<h1 className="w-full text-3xl font-bold text-black m-2">
						{' '}
						ANETOR's.{' '}
					</h1>
				</Link2>
				<ul className="hidden md:flex">
					<Link2 to="/">
						{' '}
						<li className="p-4 hover:border-b-2 border-rose-600">
							Home
						</li>{' '}
					</Link2>
					<li className="p-4 hover:border-b-2 border-rose-600">
						<Link1
							activeClass="active"
							to="projects"
							spy={true}
							smooth={true}
							offset={-10}
							duration={400}>
							Projects
						</Link1>
					</li>

					<li className="p-4 hover:border-b-2 border-rose-600">
						Technologies
					</li>
					<li className="p-4 hover:border-b-2 border-rose-600">
						Documentation
					</li>
					<li className="p-4 hover:border-b-2 border-rose-600">
						Contact
					</li>
				</ul>

				<div
					onClick={handleNav}
					className="block md:hidden">
					{nav ? (
						<AiOutlineClose
							size={20}
							className="text-black"
						/>
					) : (
						<AiOutlineMenu
							size={20}
							className="text-black"
						/>
					)}
				</div>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700 hover:text-gray-600'
							: 'ease-in-out duration-700 fixed left-[-100%]'
					}>
					<h1 className="w-full text-3xl font-bold text-white m-4 ">
						{' '}
						ANETOR's.{' '}
					</h1>

					<ul className="p-4 uppercase text-white">
						<li className="p-4 border-b border-gray-400">Home</li>
						<li className="p-4 border-b border-gray-400">
							Projects
						</li>
						<li className="p-4 border-b border-gray-400">
							Technologies
						</li>
						<li className="p-4 border-b border-gray-400">
							Documentation
						</li>
						<li className="p-4">Contact</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

import clsx from 'clsx';
import { capitalize } from 'lodash-es';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const RSMobileMenu = ({ menuOpen, headerFullWidth }) => {

	const menuItems = ['home', 'about', 'courses', 'blogs', 'contact' ];
	const [activeMenu, setActiveMenu ] = useState('home');

	const handleActiveMenu = () => {
		(menu) => setActiveMenu(menu)
	}

	useEffect(() => {
		setActiveMenu(location.pathname.slice(1))
	}, [])

	return (
		<div className={headerFullWidth ? "container-fluid relative" : "container relative"}>
			<div className={menuOpen ? "mobile-menu-part open" : "mobile-menu-part"}>
				<div className="mobile-menu">
					<ul className="nav-menu">
						{menuItems.map((menu, index) => (
							<li className={clsx({'current-menu-item': menu === activeMenu})} key={index}>
								<Link href={menu} onClick={handleActiveMenu(menu)}>{capitalize(menu)}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default RSMobileMenu;
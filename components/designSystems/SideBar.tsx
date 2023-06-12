import Image from 'next/image';
import logoSrc from '../../public/assets/logo.png'

export const SideBar = () => (
<div id="side-bar" className='side-bar'>
    <div className="side-bar-image object-contain">
        <Image src={logoSrc} alt="logo" fill />
    </div>
    <ul className="side-bar-menu">
        <li>ABOUT</li>
        <li>SKILL</li>
        <li>CONTACT</li>
    </ul>
</div>
);

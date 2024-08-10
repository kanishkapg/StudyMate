import { NavLink } from 'react-router-dom';
import { BiTimer } from 'react-icons/bi';
import logo from '../../assets/images/HomePageIcons/logo.png';

const NavLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/downloads',
    display: 'Downloads',
  },
  {
    path: '/features',
    display: 'Features',
  },
];

const Header = () => {
  return (
    <header className="header flex items-center py-[40px]">
      <div className="container h-[100px] flex items-center justify-between">
        {/* Logo */}
        <div className="w-[192px] mt-2 ">
          <img src={logo} alt="Logo" className="w-full h-full" />
        </div>

        {/* Center Button */}
        <div className="relative">
          <button
            className="flex items-center gap-0 bg-gradient-to-b from-[#649EF3] to-[#0D63E3] shadow-md w-[316px] h-[48px] rounded-lg text-white radius-[15px]"
            style={{ top: '35px', left: '233px' }}
          >
            <BiTimer className="w-[28px] h-[27px] ml-3" />
            <span className="ml-4 font-extrabold text-[24px] leading-[29.05px]">
              Set Your Study Plan
            </span>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center">
          <ul className="flex items-center space-x-[2.7rem]">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                      : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

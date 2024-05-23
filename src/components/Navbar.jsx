import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-4xl text-white font-semibold">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        PG.
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/dontwike/"><FaLinkedin /></a>
        <a href="https://github.com/dontwike"><FaGithub /></a>
        <a href="https://www.instagram.com/dontwike/"><FaInstagram /></a>
        <a href="https://twitter.com/_pranjal_goyal_"><RiTwitterXLine /></a>
      </div>
    </nav>
  );
};

export default Navbar;

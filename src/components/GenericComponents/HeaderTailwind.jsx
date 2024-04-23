import { Link } from "react-router-dom";
import IMAGES from "../../assets"
// import { Link } from 'react-router-dom';

const HeaderTailwind = () => {

  return (
    <>
      <div className='container-fluid bg-slate-800 h-28 '>

        <div className="container flex content-center mx-auto justify-between">
          <div>
            <img src={IMAGES.WHITE_LOGO} alt="logo" />
          </div>
          <nav className="flex justify-center content-center pt-12">
            <ul className="flex content-center gap-x-3">
              <li> <Link className="text-white" to="/">Home</Link> </li>
              <li> <Link className="text-white" to="/about">About</Link></li>
              <li> <Link className="text-white" to="/contatc">Contact</Link></li>
              <li><Link className="text-white" to="/blog">Blog</Link></li>
            </ul>
          </nav>

          <div className="flex gap-3 content-center">
            <ul className="pt-12">
              <li><Link className="text-white" to="/blog">Login</Link></li>
            </ul>
            <button className="bg-[#EA18F3] hover:bg-transparent hover:border-[#EA18F3] hover:border-2 border-2 border-slate-800 px-6 py-2 h-12 mt-8 rounded-lg	text-white transition ease-in-out delay-300">Get Started</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default HeaderTailwind;



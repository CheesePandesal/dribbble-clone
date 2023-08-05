import "./App.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { PiCaretDownBold } from "react-icons/pi";
import { BiFilter } from "react-icons/bi";
import logo from "./assets/dribblelogo.jpg";
import profile from "./assets/profile.png";
import ProductGrid from "./components/ProductGrid";
import LoadMoreWork from "./components/LoadMoreWork";
import Footer from "./components/Footer";
function App() {
  
  let arrayOfOptions = [
    "Discover",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Print",
    "Product",
  ];
  return (
    <>
      <div className="font-sans">
        <header className="flex justify-between sticky top-0 w-full px-5 py-3 md:px-7 bg-white">
          <div className="flex items-center gap-2 md:gap-3">
            <BiMenuAltLeft size={25} className="md:hidden" />
            <img src={logo} alt="" className="w-24 2xl:hidden" />
            <ul className="hidden md:flex text-bold">
              <li>
                <a href="#" className="text-xs hover:underline px-3 font-bold">
                  Find talent
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline px-3 font-bold">
                  For designers
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline px-3 font-bold">
                  Inspiration
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline px-3 font-bold">
                  Learn design
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline px-3 font-bold">
                  Go Pro
                </a>
              </li>
            </ul>
          </div>
          <img src={logo} alt="" className="w-24 hidden 2xl:block" />
          <div className="flex items-center gap-2 md:gap-4">
            <CiSearch size={23} className="font-bold lg:hidden" />
            <form className="hidden lg:flex items-center bg-[#f4f5fb] px-5 py-3 rounded-[30px]">
              <CiSearch
                size={20}
                style={{ fontWeight: "bold", color: "#36353c" }}
              />
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#f4f5fb] w-[160px] pl-2 outline-none"
              />
            </form>
            <button className="hidden xl:block py-3 bg-black text-white rounded-xl px-3 text-sm font-bold">
              Share Work
            </button>
            <img
              src={profile}
              alt=""
              className="w-9 h-9 object-cover rounded-full"
            />
          </div>
        </header>
        <div className="px-16 py-3 flex justify-between lg:pt-12">
          <div className="flex items-center gap-4 px-4 py-2 border-2 rounded-lg w-[120px] text-gray-500 hover:border-4">
            <a href="#">Popular</a>
            <PiCaretDownBold />
          </div>
          <div className="hidden px-4 py-2 border-t-2 gap-8 justify-center overflow-hidden lg:flex lg:border-0">
            {arrayOfOptions.map((element, id) => {
              return (
                <li className="list-none inline py-3 lg:py-0">
                  <a href="#" key={id}>
                    {element}
                  </a>
                </li>
              );
            })}
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border-2 rounded-lg w-[110px] text-black hover:border-4">
            <BiFilter size={25} />
            <a href="#">Filters</a>
          </div>
        </div>
        <div className="flex px-4 py-2 border-t-2 gap-8 justify-center overflow-hidden lg:hidden">
          {arrayOfOptions.map((element, id) => {
            return (
              <li className="list-none inline py-3">
                <a href="#" key={id}>
                  {element}
                </a>
              </li>
            );
          })}
        </div>
        <ProductGrid />
        <LoadMoreWork />
        <Footer />
      </div>
    </>
  );
}

export default App;

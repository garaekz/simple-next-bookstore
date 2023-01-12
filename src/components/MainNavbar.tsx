import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FcShop } from "react-icons/fc";
import { IoCartOutline } from "react-icons/io5";
import { useRouter } from "next/router";

function MainNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartQuantity = 5;
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  };
  return (
    <>
      <header className="py-[15px] lg:py-0 fixed h-20 inset-x-0 top-0 bg-white z-30 flex items-center">
        {/* Backdrop */}
        {(isMenuOpen || isCartOpen) && (
          <div
            onClick={() => closeAllMenus()}
            className="fixed inset-0 bg-black bg-opacity-70 z-20 transition ease-in-out duration-300"
          ></div>
        )}
        <div className="px-[15px] h-full w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex items-center">
          <div className="flex items-center w-full">
            <div>
              <Link href="/">
                <Image src="/react.svg" alt="Logo" width={35} height={35} />
              </Link>
            </div>
            <div className="ml-[150px] mx-[50px] lg:mx-[20px] flex-1">
              <nav
                className={`${
                  isMenuOpen ? "right-0" : "right-[-250px]"
                } lg:p-0 block bg-white fixed lg:static inset-y-0 w-[250px] lg:w-full bg-white z-50 lg:z-20 transition-all duration-300 px-[30px] pt-[20px] pb-[10px]`}
              >
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="lg:hidden absolute top-[19px] right-[15px] h-[35px] w-[35px] bg-lighter rounded-full text-xs"
                >
                  <FaTimes className="inline-block" />
                </button>
                <div className="lg:hidden mb-[30px]">
                  <Link href="/">
                    <FcShop className="inline-block" />
                  </Link>
                </div>
                <ul className="block h-full overflow-y-auto m-0 lg:flex lg:items-center lg:flex-wrap lg:justify-center lg:p-0">
                  <li className="translate-y-0 transition-all duration-300 opacity-100 my-[10px] lg:my-0 lg:mx-[24px] lg:relative lg:text-body">
                    <Link
                      href="/"
                      className={`${
                        router.pathname === "/"
                          ? "before:w-full before:opacity-1"
                          : "before:w-0 before:opacity-0"
                      } text-body lg:text-heading lg:h-[80px] lg:leading-[80px] lg:block h-auto py-[5px] lg:p-0 inline-block font-bold relative duration-300 before:h-[2px] before:bg-black before:absolute before:bottom-[29px] before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="translate-y-0 transition-all duration-300 opacity-100 my-[10px] lg:my-0 lg:mx-[24px] lg:relative lg:text-body">
                    <Link
                      href="/shop"
                      className={`${
                        router.pathname === "/shop"
                          ? "before:w-full before:opacity-1"
                          : "before:w-0 before:opacity-0"
                      } text-body lg:text-heading lg:h-[80px] lg:leading-[80px] lg:block h-auto py-[5px] lg:p-0 inline-block font-bold relative duration-300 before:h-[2px] before:bg-black before:absolute before:bottom-[29px] before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100`}
                    >
                      Shop
                    </Link>
                    <div className="absolute bottom-[30px] h-0.5 w-0 opacity-0 bg-black group-hover:w-full group-hover:opacity-100 transition transition-all ease duration-500"></div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mt-1">
              <ul className="flex items-center gap-6">
                <li>
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative flex justify-center items-center duration-300 hover:text-white after:w-[45px] after:h-[45px] after:bg-secondary after:rounded-full after:absolute after:z-[-1] after:scale-0 hover:after:scale-100 after:duration-300"
                  >
                    {cartQuantity > 0 && (
                      <span className="text-center bg-primary border-2 border-white text-xs font-medium text-white rounded-full h-[22px] w-[22px] absolute top-[-12px] right-[-12px]">
                        {cartQuantity}
                      </span>
                    )}
                    <IoCartOutline className="text-3xl" />
                  </button>
                </li>
                <li className="lg:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="relative flex justify-center items-center duration-300 hover:text-white after:w-[45px] after:h-[45px] after:bg-secondary after:rounded-full after:absolute after:z-[-1] after:scale-0 hover:after:scale-100 after:duration-300"
                  >
                    <RxHamburgerMenu className="text-2xl" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainNavbar;

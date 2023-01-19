import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FcShop } from "react-icons/fc";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { BaseState } from "../types/state.types";
import SingleCartProduct from "./Cart/SingleCartProduct";
import { useAddToCartToast } from "../hooks/addToCart.hook";
import { CgHeart, CgSearch } from "react-icons/cg";
import NotYetModal from "./NotYetModal";

function MainNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotYetModalOpen, setIsNotYetModalOpen] = useState(false);

  const cart = useSelector((state: BaseState) => state.cart);
  const cartQuantity = cart.totalQuantity;
  const cartTotal = cart.totalPrice;
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  };

  const closeNotYetModal = () => setIsNotYetModalOpen(false);

  useAddToCartToast();

  return (
    <>
      <NotYetModal isOpen={isNotYetModalOpen} onClose={closeNotYetModal} />
      <header className="py-[15px] lg:py-0 fixed h-20 inset-x-0 top-0 bg-white z-30 flex items-center">
        {/* Backdrop */}
        {(isMenuOpen || isCartOpen) && (
          <div
            onClick={() => closeAllMenus()}
            className="fixed inset-0 bg-black bg-opacity-70 z-20 transition ease-in-out duration-300"
          ></div>
        )}
        <div className="px-[15px] h-full w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex items-center">
          <div className="flex justify-between items-center w-full">
            <div className="">
              <Link href="/">
                <Image src="/react.svg" alt="Logo" width={35} height={35} />
              </Link>
            </div>
            <div className="md:ml-[150px] md:mx-[50px] lg:mx-[20px] flex-1 md:block">
              <nav
                className={`${
                  isMenuOpen ? "right-0" : "right-[-250px]"
                } lg:p-0 block bg-white fixed lg:static inset-y-0 w-[250px] lg:w-full bg-white z-50 lg:z-20 transition-all duration-300 px-[30px] pt-[20px] pb-[10px]`}
              >
                <button
                  onClick={() => setIsMenuOpen(false)}
                  name="Close Cart Menu"
                  className="lg:hidden absolute top-[19px] right-[15px] h-[35px] w-[35px] bg-lighter rounded-full text-xs"
                >
                  <FaTimes className="inline-block" />
                </button>
                <div className="lg:hidden mb-[30px]">
                  <Link href="/">
                    <Image src="/react.svg" alt="Logo" width={35} height={35} />
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
                      } text-body lg:text-heading lg:h-[80px] lg:leading-[80px] lg:block h-auto py-[5px] lg:p-0 inline-block font-bold relative duration-300 before:h-[2px] before:bg-black before:absolute before:bottom-0 before:lg:bottom-[29px] before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100`}
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
                      } text-body lg:text-heading lg:h-[80px] lg:leading-[80px] lg:block h-auto py-[5px] lg:p-0 inline-block font-bold relative duration-300 before:h-[2px] before:bg-black before:absolute before:bottom-0 before:lg:bottom-[29px] before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100`}
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
                    onClick={() => setIsNotYetModalOpen(true)}
                    className="flex justify-center items-center duration-300 hover:text-white after:w-[45px] after:h-[45px] after:bg-secondary after:rounded-full after:absolute after:z-[-1] after:scale-0 hover:after:scale-100 after:duration-300">
                    <CgSearch className="text-2xl" />
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setIsNotYetModalOpen(true)}
                    className="flex justify-center items-center duration-300 hover:text-white after:w-[45px] after:h-[45px] after:bg-secondary after:rounded-full after:absolute after:z-[-1] after:scale-0 hover:after:scale-100 after:duration-300">
                    <CgHeart className="text-2xl" />
                  </button>
                </li>
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
                <li>
                  <button
                    onClick={() => setIsNotYetModalOpen(true)}
                    className="flex justify-center items-center duration-300 hover:text-white after:w-[45px] after:h-[45px] after:bg-secondary after:rounded-full after:absolute after:z-[-1] after:scale-0 hover:after:scale-100 after:duration-300">
                    <IoPersonOutline className="text-2xl" />
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
      <div
        className={`${
          isCartOpen ? "right-0" : "right-[-800px]"
        } w-full md:w-[600px] fixed inset-y-0 z-40 transition-all duration-500`}
      >
        <div className="scrollbar bg-white h-full w-full md:w-[600px] flex flex-col py-[30px] px-[15px] md:py-[60px] md:px-[50px] overflow-auto">
          <div className="flex justify-between items-center border-b-2 border-light pb-[18px]">
            <h2 className="text-[#27272e] mb-0 text-[26px] font-bold">
              Cart review
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="h-10 w-10 text-body rounded-full bg-light flex items-center justify-center hover:bg-primary hover:text-white transition duration-300"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex-auto py-[30px]">
            <ul>
              {cart.items.map((item, index) => (
                <SingleCartProduct key={index} item={item} />
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-light">
            <h3 className="flex items-center justify-between my-[22px] text-[20px] font-bold">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </h3>
            <div className="flex gap-6 font-bold">
              <button
                onClick={() => setIsNotYetModalOpen(true)}
                className="block relative w-full text-center text-white bg-primary py-[15px] rounded-md transition duration-300 before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-500 hover:before:scale-110 before:rounded before:bg-primary z-10 before:z-[-1]"
              >
                View Cart
              </button>
              <button
                onClick={() => setIsNotYetModalOpen(true)}
                className="block relative w-full text-center text-white bg-secondary py-[15px] rounded-md transition duration-300 before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-500 hover:before:scale-110 before:rounded before:bg-secondary z-10 before:z-[-1]"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;

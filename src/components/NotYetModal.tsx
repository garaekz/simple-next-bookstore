import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { FC, Fragment, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NotYetModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 flex items-center justify-center"
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/bored-612x612.jpg"
                      alt="Coming Soon"
                      width={500}
                      height={500}
                      className="center object-cover object-center"
                    />
                  </div>
                  <div className="px-10">
                    <h3 className="text-[30px] font-bold text-heading mt-[20px] mb-[15px]">
                      Hang tight, we're building something awesome!
                    </h3>
                    <p className="text-body mb-[30px]">
                      We're hard at work putting the finishing touches on this
                      section of our bookstore. While you wait, why not check
                      out{" "}
                      <a
                        href="https://github.com/garaekz/simple-next-bookstore"
                        className="text-primary font-semibold"
                        target="_blank"
                        rel="noreferrer"
                      >
                        our GitHub repo
                      </a>{" "}
                      to see our progress and leave a star if you're loving it
                      so far.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button 
                    onClick={onClose}
                    className="bg-primary text-white rounded-md py-[15px] px-[30px] mb-[15px] md:pt-[16px] md:px-[38px] md:mb-[17px] inline-block">
                      Close
                    </button>
                  </div>
                </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  );
};

export default NotYetModal;

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import userPic from "../public/images/profile.png";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Serverless CRUD Opeations</title>
        <meta name="description" content="NextJS Serverless CRUD Opeations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen justify-between flex-wrapper">
        <header>
          <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                NextJS Serverless CRUD Opeations
              </span>
              <div className="flex md:order-2">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add a product
                </button>
              </div>
            </div>
          </nav>
        </header>
        <main className="mb-auto">
          <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                      alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      height={400}
                      width={400}
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                      alt="Olive drab green insulated bottle with flared screw lid and flat top."
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      height={400}
                      width={400}
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                      alt="Person using a pen to cross a task off a productivity paper card."
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      height={400}
                      width={400}
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    Focus Paper Refill
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                      alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      height={400}
                      width={400}
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    Machined Mechanical Pencil
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                      alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      height={400}
                      width={400}
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    Machined Mechanical Pencil
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                      alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      height={400}
                      width={400}
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    Machined Mechanical Pencil
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                      alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      height={400}
                      width={400}
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    Machined Mechanical Pencil
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                      alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      height={400}
                      width={400}
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    Machined Mechanical Pencil
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                      alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      height={400}
                      width={400}
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    Machined Mechanical Pencil
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-32 w-32 float-right userIcon">
            <div className="absolute bottom-0 right-0 h-16 w-16">
              <Image
                src={userPic}
                alt="About application"
                onClick={() => setShowModal(true)}
              />
            </div>
          </div>
        </main>
        <footer className="bg-blue-500 text-center mt-auto">
          <span>© Copyright 2014, All Rights Reserved</span>
        </footer>
        {showModal && (
          <div
            id="defaultModal"
            tabIndex="-1"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
            aria-modal="true"
            role="dialog"
          >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    About App
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        data-accordion-target="#accordion-collapse-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-body-1"
                        onClick={() => handleOpen(1)}
                      >
                        <span class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          &nbsp; About me
                        </span>
                        <svg
                          data-accordion-icon=""
                          className={`${"w-6 h-6 shrink-0"} ${
                            open === 1 ? "rotate-180" : ""
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-collapse-body-1"
                      className={open === 1 ? "" : "hidden"}
                      aria-labelledby="accordion-collapse-heading-1"
                    >
                      <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Flowbite is an open-source library of interactive
                          components built on top of Tailwind CSS including
                          buttons, dropdowns, modals, navbars, and more.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Check out this guide to learn how to{" "}
                          <a
                            href="/docs/getting-started/introduction/"
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            get started
                          </a>{" "}
                          and start developing websites even faster with
                          components on top of Tailwind CSS.
                        </p>
                      </div>
                    </div>
                    <h2 id="accordion-collapse-heading-2">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        data-accordion-target="#accordion-collapse-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-2"
                        onClick={() => handleOpen(2)}
                      >
                        <span class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                            />
                          </svg>
                          &nbsp; Packages used
                        </span>
                        <svg
                          data-accordion-icon=""
                          className={`${"w-6 h-6 shrink-0"} ${
                            open === 2 ? "rotate-180" : ""
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-collapse-body-2"
                      className={open === 2 ? "" : "hidden"}
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Flowbite is first conceptualized and designed using
                          the Figma software so everything you see in the
                          library has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Check out the{" "}
                          <a
                            href="https://flowbite.com/figma/"
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Figma design system
                          </a>{" "}
                          based on the utility classes from Tailwind CSS and
                          components from Flowbite.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button
                    data-modal-toggle="defaultModal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

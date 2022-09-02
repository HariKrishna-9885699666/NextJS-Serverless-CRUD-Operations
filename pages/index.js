import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import userPic from '../public/images/profile.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Serverless CRUD Opeations</title>
        <meta name="description" content="NextJS Serverless CRUD Opeations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen justify-between flex-wrapper">
        <header>
          <nav className="items-center justify-between flex-wrap bg-black p-6">
            <div className="text-center items-center flex-shrink-0 text-white">
              <span className="font-semibold text-xl tracking-tight leading-1">NextJS Serverless CRUD Opeations</span>
            </div>
            <div className="text-right items-center flex-shrink-0 text-white float-right addProductBtn">
              <span className="font-semibold text-xl tracking-tight"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add a product</button>
              </span>
            </div>
          </nav>
        </header>
        <main className="mb-auto">
          <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>

                <a href="#" className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-32 w-32 float-right userIcon">
            <div className="absolute bottom-0 right-0 h-16 w-16">
              <Image src={userPic} alt="About application" onClick={() => {
              }} />
            </div>
          </div>
        </main>
        <footer className="bg-blue-500 text-center mt-auto">
          <span>
            © Copyright 2014, All Rights Reserved
          </span>
        </footer>
      </div>
    </div>
  )
}

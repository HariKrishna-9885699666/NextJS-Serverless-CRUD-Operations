import Link from 'next/link';
import { useRouter } from 'next/router';
import {Footer, About} from './';

function Layout({ children, open, showModal, setShowModal, handleOpen, setLoader } = props) {
    const route = useRouter();
    const handleClick = (e, path) => {
        e.preventDefault()
        route.push({
            pathname: '/'
        });
        setLoader(true);
    };
    return (
        <>
            <div className="flex flex-col min-h-screen justify-between flex-wrapper">
                <header>
                    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                        <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            <Link href="/">
                                <span onClick={(e) => handleClick(e)} className="link">NextJS Serverless CRUD Opeations</span>
                            </Link>
                        </span>
                        <div className="flex md:order-2">
                            <Link href="/product/add">
                                <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add a product
                                </button>
                            </Link>
                        </div>
                        </div>
                    </nav>
                </header>
                {children}
                <Footer />
                <About open={open} showModal={showModal} setShowModal={setShowModal} handleOpen={handleOpen} />
            </div>
        </>
    );
}

export default Layout;
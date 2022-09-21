import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DeleteModal } from '../../components/shared';

function ProductList({allProductList, setAllProductList, setLoader, showDeleteModal, setShowDeleteModal, productList} = props) {
    const route = useRouter();
    const [idToDelete, setIdToDelete] = useState(null);
    const showProductDetails = (productId) => {
        route.push({
            pathname: '/product/' + productId
        });
    }
    useEffect(()=> {
        setAllProductList(productList);
        setLoader(false);
    }, [allProductList, productList]);

    return (
        <Fragment>
            <Head>
                <title>NextJS Serverless CRUD Opeations</title>
                <meta name="description" content="NextJS Serverless CRUD Operations" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="mb-auto">
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Products</h2>
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {allProductList && allProductList.map((item) => {
                                return (
                                    <Fragment key={item._id}>
                                        <a href="#javascript">
                                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8" onClick={() => {
                                            setLoader(true);
                                            showProductDetails(item._id)
                                        }}>
                                                <Image
                                                src={item.imageUrl}
                                                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                height={400}
                                                width={400}
                                                />
                                            </div>
                                            <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900">
                                                <span className="float-left">${item.price}</span>
                                                <span className="float-right" onClick={() => {
                                                    setIdToDelete(item._id);
                                                    setShowDeleteModal(true);
                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </span>
                                            </p>
                                        </a>
                                        {idToDelete === item._id && (<DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} setLoader={setLoader} idToDelete={idToDelete} allProductList={allProductList} setAllProductList={setAllProductList} />)}
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default ProductList;
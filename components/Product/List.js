import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DeleteModal, DeleteIcon, EditIcon } from '../../components/shared';

function ProductList({allProductList, setAllProductList, setLoader, showDeleteModal, setShowDeleteModal, productList} = props) {
    const route = useRouter();
    const [idToDelete, setIdToDelete] = useState(null);
    const showProductDetails = (productId) => {
        route.push({
            pathname: '/product/' + productId
        });
    }

    useEffect(()=> {
        if (productList) {
            setAllProductList(productList);
        }
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
                                                    <DeleteIcon />
                                                </span>
                                                <Link href={`/product/edit/${item._id}`}>
                                                    <span className="float-right" onClick={() => {
                                                        setLoader(true);
                                                    }}>
                                                        <EditIcon />
                                                    </span>
                                                </Link>
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
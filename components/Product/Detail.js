import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

function ProductDetail({productDetails, setLoader} = props) {
    const {name, price, imageUrl, description} = productDetails[0];
    useEffect(()=> {
        setLoader(false);
    }, []);
    return (
        <Fragment>
            <Head>
                <title>Product Detail Page</title>
                <meta name="description" content="NextJS Serverless CRUD Opeations" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="mb-auto">
                <div className="bg-white">
                    <div className="pt-6">
                        <div className="mx-auto mt-6 max-w-4xl sm:px-6">
                            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                                <Image src={imageUrl} alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full" width="100%" height="100%" layout="responsive" objectFit="contain" loading="lazy"/>
                            </div>
                        </div>
                        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                            <div className="lg:col-span-2 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
                            </div>
                            <div className="mt-4 lg:row-span-3 lg:mt-0">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl tracking-tight text-gray-900 text-right">${price}</p>
                            </div>
                            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pb-16 lg:pr-8">
                                <div>
                                    <h3 className="sr-only">Description</h3>
                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900">{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default ProductDetail;
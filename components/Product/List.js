import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

function ProductList({productList} = props) {
    const route = useRouter();
    const showProductDetails = (productId) => {
        route.push({
            pathname: '/product/' + productId
        });
    }
    return (
        <Fragment>
            <Head>
                <title>NextJS Serverless CRUD Opeations</title>
                <meta name="description" content="NextJS Serverless CRUD Opeations" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="mb-auto">
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Products</h2>
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {productList && productList.map((item) => {
                                return (
                                    <a href="#" className="group" key={item._id}>
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8" onClick={() => {
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
                                        <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
                                    </a>
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
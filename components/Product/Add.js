import { Fragment } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from 'next/router';
import axios from '../../pages/api';
import 'react-toastify/dist/ReactToastify.css';
import { toastError, toastSuccess, isImage } from '../../lib/constants';

yup.addMethod(yup.string, "productImage", function (errorMessage) {
    return this.test(`valid-product-image`, errorMessage, function (value) {
        const { path, createError } = this;
        let url = value.split('?');
        url = url[0];
        let isImageUrl = isImage(url);

        return (
            (value && isImageUrl) ||
            createError({ path, message: errorMessage })
        );
    });
});

const schema = yup.object({
    product_name: yup.string().required('Required').min(3).max(20),
    product_price: yup.number().typeError('Price must be a number').required('Required').positive().integer().min(1).max(100),
    product_image: yup.string().required('Required').url().productImage('Must be a valid image url'),
    product_description: yup.string().required('Required').min(3).max(200),
});

function AddProduct({ loader, setLoader } = props) {
    const route = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        try {
            setLoader(true);
            let response = await axios({
                method: 'POST',
                url: `/add-product`,
                data
            });
            response = response.data;
            if (!response.success) {
                toastError(response.error);
            } else {
                toastSuccess(response.message);
                reset({
                    product_name: '',
                    product_price: '',
                    product_image: '',
                    product_description: ''
                });
            }
            setLoader(false);
        } catch (error) {
            toastError(error?.response?.data?.message);
            setLoader(false);
        }
    }
    return (
        <Fragment>
            <Head>
                <title>Add Product</title>
                <meta name="description" content="NextJS Serverless CRUD OpeatioclassName=ns" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="mb-auto">
                <div className={`block p-6 rounded-lg shadow-lg bg-white grid h-screen place-items-center ${loader ? "form-disable" : ""}`}>
                    <form className="p-6 rounded-lg shadow-lg bg-white max-w-md w-full addProductForm" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="addProductLabel">Add a product</h1>
                        <div className="form-group mb-6">
                            <label htmlFor="product_name" className="form-label inline-block mb-2 text-gray-700">Name <span className="errorMessage">{errors.product_name?.message}</span></label>
                            <input
                                type="text" {...register('product_name')}
                                name="product_name"
                                className={`form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:outline-none ${errors.product_name?.message ? "border-red-500" : ""}`}
                                id="product_name"
                                aria-describedby="emailHelp"
                                placeholder="Enter name" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="product_price" className="form-label inline-block mb-2 text-gray-700">Price <span className="errorMessage">{errors.product_price?.message}</span></label>
                            <input type="text" {...register('product_price')} name="product_price" className={`form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${errors.product_price?.message ? "border-red-500" : ""}`} id="product_price"
                                placeholder="Enter price" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="product_image" className="form-label inline-block mb-2 text-gray-700">Image <span className="errorMessage">{errors.product_image?.message}</span></label>
                            <input type="text" {...register('product_image')} name="product_image" className={`form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:outline-none ${errors.product_image?.message ? "border-red-500" : ""}`} id="product_image"
                                aria-describedby="emailHelp" placeholder="Enter Image URL" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="product_description" className="form-label inline-block mb-2 text-gray-700">Description <span className="errorMessage">{errors.product_description?.message}</span></label>
                            <textarea name="product_description" {...register('product_description')} className={`form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${errors.product_description?.message ? "border-red-500" : ""}`}
                                id="product_description"
                                rows="3"
                                placeholder="Enter description"
                            ></textarea>
                        </div>
                        <button type="submit" className="
                        px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Submit</button>
                        &nbsp;
                        
                        <button type="button" className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {
                            route.push({
                                pathname: '/'
                            });
                            setLoader(true);
                        }}>Back</button>
                        
                    </form>
                </div>
            </main>
        </Fragment>
    )
}

export default AddProduct;
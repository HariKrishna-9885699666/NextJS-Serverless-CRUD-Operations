import ProductList from './product/list';
import { getProductList } from '../lib/axiosApiCall';

export default function Root({...props}) {
    return(
        <>
            <ProductList {...props} />
        </>
    )
}

export async function getServerSideProps () {
    try {
        const productList = await getProductList();
        return {
            props: {
                productList: productList?.data
            }
        }
    } catch (error) {
        console.log(error);
    }
}
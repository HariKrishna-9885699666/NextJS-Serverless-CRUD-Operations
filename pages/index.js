import ProductList from './product/list';
import { getData } from '../pages/api/get-products';

const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: 'test',
        price: 10,
        image: 'https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=1060&t=st=1662443889~exp=1662444489~hmac=338d589a5dfed178ec8de7e735aa5c142ebc90bedf7fdbaf9c3e7db3624a0ebf',
        description: 'a for apple'
    },
    {
        id: 2,
        name: 'welcome',
        price: 20,
        image: 'https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=1060&t=st=1662443889~exp=1662444489~hmac=338d589a5dfed178ec8de7e735aa5c142ebc90bedf7fdbaf9c3e7db3624a0ebf',
        description: 'b for ball'
    }
];

export default function Root({...props}){
    // console.log(productList)
    return(
        <>
            <ProductList {...props} />
        </>
    )
}

export async function getServerSideProps () {
    try {
        const productList = await getData();
        return {
            props: {
                productList: productList?.data
            }
        }
    } catch (error) {
        console.log(error);
    }
}
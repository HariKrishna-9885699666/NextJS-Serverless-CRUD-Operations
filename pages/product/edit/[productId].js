import AddProduct from '../../../components/Product/Add';
import { getProductDetails } from '../../../lib/axiosApiCall';

export default function EditProductPage({...props}) {
  return (
    <>
      <AddProduct {...props}/>
    </>
  )
}

export async function getServerSideProps (context) {
    try {
        const productList = await getProductDetails(context.query.productId);
        return {
            props: {
                productDetails: productList?.data,
                editMode: true
            }
        }
    } catch (error) {
        console.log(error);
    }
}
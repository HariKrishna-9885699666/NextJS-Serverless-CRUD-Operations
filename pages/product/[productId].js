import ProductDetail from '../../components/Product/Detail';
import { getProductDetails } from '../../pages/api/get-products';

export default function ProductDetailPage ({...props}) {
  return (
    <>
      <ProductDetail {...props}/>
    </>
  )
}

export async function getServerSideProps (context) {
  try {
      const productList = await getProductDetails(context.query.productId);
      return {
          props: {
              productDetails: productList?.data
          }
      }
  } catch (error) {
      console.log(error);
  }
}

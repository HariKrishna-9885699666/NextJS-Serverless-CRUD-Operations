import ProductList from '../../components/Product/List';

function ProductListPage({...props}) {
  return (
    <>
      <ProductList {...props}/>
    </>
  )
}

export default ProductListPage;
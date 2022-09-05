import ProductList from './product/list';

export default function Root({...props}){
    return(
        <>
            <ProductList {...props}></ProductList>
        </>
    )
}
import axios from '../pages/api';

export async function getProductList(dontUseFullPath) {
    let response = await axios({
        method: 'GET',
        url: dontUseFullPath ? `/get-products` : `${process.env.BASE_URL}/get-products`
    });
    return response?.data;
}

export async function getProductDetails(productId) {
    let response = await axios({
        method: 'GET',
        url: `${process.env.BASE_URL}/get-products/?id=${productId}`
    });
    return response?.data;
}
import axios from '../api';
import { client } from '../../config/dbConnect';

export async function getData() {
    let response = await axios({
        method: 'GET',
        url: `http://localhost:3000/api/get-products`
    });
    return response?.data;
}

async function handler (req, res) {
    try {
        if (req.method === 'GET') {
            let result;
            client.connect(async err => {
                const productCollection = client.db(process.env.DB_NAME).collection("products");
                result = await productCollection.find({}, {name: 1, price:1, image:1, description:1}).sort({"_id":-1}).toArray();
                if (result) {
                    res.status(201).json({success: true, data: result});
                } else {
                    res.status(400).json({success: false, message: 'Unknown error'});
                }
                client.close();
            });
        }
    } catch (error) {
        throw new Error('Processing error' + error);
    }
}

export default handler;
const ObjectId = require('mongodb').ObjectId;
import { client } from '../../config/dbConnect';

async function handler (req, res) {
    try {
        if (req.method === 'PUT') {
            const productId = req.query.id
            const data = req.body;
            const { product_name: name, product_price: price, product_image: imageUrl, product_description: description } = data;
            let result;
            client.connect(async err => {
                const productCollection = client.db(process.env.DB_NAME).collection("products");
                result = await productCollection.updateOne({ _id : ObjectId(productId)},{$set :{name: name, price: price, imageUrl: imageUrl, description: description}});
                if (result?.matchedCount) {
                    res.status(201).json({success: true, message: 'Product updated successfully'});
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
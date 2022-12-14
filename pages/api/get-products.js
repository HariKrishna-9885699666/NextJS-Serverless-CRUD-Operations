import { client } from '../../config/dbConnect';
const ObjectId = require('mongodb').ObjectId;

async function handler (req, res) {
    try {
        const productId = req.query?.id;
        if (req.method === 'GET') {
            let result;
            client.connect(async err => {
                const productCollection = client.db(process.env.DB_NAME).collection("products");
                if (!productId) {
                    result = await productCollection.find({}, {name: 1, price:1, image:1, description:1}).sort({"_id":-1}).toArray();
                } else {
                    result = await productCollection.find(ObjectId(productId)).toArray();
                }
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
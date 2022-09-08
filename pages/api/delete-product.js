const ObjectId = require('mongodb').ObjectId;
import { client } from '../../config/dbConnect';

async function handler (req, res) {
    try {
        if (req.method === 'DELETE' && req.query?.id) {
            const idToDelete = req.query?.id;
            let result;
            client.connect(async err => {
                const productCollection = client.db(process.env.DB_NAME).collection("products");
                result = await productCollection.deleteOne({
                    _id: ObjectId(idToDelete)
                })
                if (result) {
                    res.status(201).json({success: true, message: 'Product deleted successfully'});
                } else {
                    res.status(400).json({success: false, message: 'Unknown error'});
                }
                client.close();
            });
        } else {
            res.status(400).json({success: false, message: 'Not found'});
        }
    } catch (error) {
        throw new Error('Processing error' + error);
    }
}

export default handler;
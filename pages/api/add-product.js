import { client } from '../../config/dbConnect';

async function handler (req, res) {
    try {
        if (req.method === 'POST') {
            const data = req.body;
            const { product_name: name, product_price: price, product_image: imageUrl, product_description: description } = data;
            let result;
            client.connect(async err => {
                const productCollection = client.db(process.env.DB_NAME).collection("products");
                result = await productCollection.insertOne({
                    name, price, imageUrl, description
                })
                if (result) {
                    res.status(201).json({success: true, message: 'Product inserted successfully'});
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
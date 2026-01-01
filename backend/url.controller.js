import Url from "./url.model.js";
import generateShortCode from "./codeGenerate.js";



// req is having the original url (lengthy)

export const createNewUrl = async (req, res) => {
    try {


        console.log("HIT /api/shorten");
    console.log("BODY:", req.body);

        const { originalUrl} = req.body;
        if (!originalUrl) {
            return res.status(400).json({message : "Original URL is not provided !"});
        }

        let shortCode = generateShortCode();

        while (await Url.findOne( {shortCode} )) {
            shortCode = generateShortCode();
        }

        const newURL = await Url.create({
            originalUrl, 
            shortCode
        });

        res.status(201).json({ shortUrl : `${process.env.BASE_URL}/${newURL.shortCode}`});


    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: " server eerror !"});
    }
};


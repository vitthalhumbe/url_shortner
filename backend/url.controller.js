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

export const redirectToUrl = async (req, res) => {
    try {
        const { shortCode} = req.params;

        const urlDoc = await Url.findOne({shortCode});
        if(!urlDoc) {
            return res.status(400).json({message: "Short URL not found"});
        }


        if (urlDoc.expiresAt && urlDoc.expiresAt < new Date()) {
            return res.status(410).json({message : " Short url Expired"});
        }

        urlDoc.clickCount += 1;
        await urlDoc.save();

        return res.redirect(urlDoc.originalUrl);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
};

export const getUrlAnalytics = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const urlDoc = await Url.findOne({ shortCode });

    if (!urlDoc) {
      return res.status(404).json({ message: "Short URL not found" });
    }

    return res.status(200).json({
      originalUrl: urlDoc.originalUrl,
      shortCode: urlDoc.shortCode,
      clickCount: urlDoc.clickCount,
      createdAt: urlDoc.createdAt,
      expiresAt: urlDoc.expiresAt,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

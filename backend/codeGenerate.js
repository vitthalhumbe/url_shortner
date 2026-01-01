const BASE62 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const generatedShortCode = (length= 6) => {
    let code = "";

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * BASE62.length);
        code += BASE62[index];

    }

    return code;
};

export default generatedShortCode;
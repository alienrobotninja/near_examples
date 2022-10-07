import { create, IPFSHTTPClient } from "ipfs-http-client";
import axios from "axios";
import { uploadPicture } from "./album";


let ipfs;
try {
    ipfs = create({
        url: "https://ipfs.infura.io:5001/api/v0",

    });
} catch (error) {
    console.error("IPFS error ", error);
    ipfs = undefined;
}


export async function UploadPictureOnIPFS(picture) {
    const data =  JSON.stringify({
        name: picture.name,
        image: picture.image,
        details: picture.details,
    });
    try {
        // save picture metadata to IPFS
        const added = await client.add(data);
        // IPFS url for uploaded metadata
        const url = `https://ipfs.io/ipfs/${added.path}`;

        let imageData = {
            price: picture.price,
            metadata: url
        };
        //now add the picture, including the IPFS url to the blockchain
        let saveMeme = uploadPicture(imageData);

    } catch(error){
    }
}



// get the metedata for a meme from IPFS
export const fetchMemeMeta = async (ipfsUrl) => {
    try {
        if (!ipfsUrl) return null;
        const meta = await axios.get(ipfsUrl);
        return meta;
    } catch (e) {
        console.log({e});
    }
};
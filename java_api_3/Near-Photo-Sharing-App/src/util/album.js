import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";
import {fetchMemeMeta} from "./ipfs"

const GAS = 100000000000000;



export async function uploadPicture(picture) {
    picture.id = uuid4();
    picture.price = parseNearAmount(picture.price + "");
    return await window.contract.uploadPicture( { picture })
}

export async function getPictures() {
    try{
        const pictures = await window.contract.getPictures();
        const pictureList = [];
        pictures.forEach(picture => {
            const pictureItem = new Promise( async (resolve) => {
                const meta = await fetchPictureMeta(picture.metadata);
                //call contract method to get votes count
                const vote= await window.contract.getMemeVotes({ memeId: meme.id});
                resolve({
                    id: picture.id,
                    price: picture.price,
                    owner: picture.owner,
                    addlikes: like[0],
                    removelikes: like[1],
                    name: meta.data.name,
                    image: meta.data.image,
                    details: meta.data.description,
                    size: meta.data.size
                });
            });
            pictureList.push(pictureItem);
        });
        return Promise.all(pictureList);
    } catch(e){
        console.log({e});
    }
}


export async function likePicture({id, like}){
    const isSuccess = await window.contract.likePicture({pictureId: id, like: u8}, GAS);
    if (isSuccess){
        return Promise.resolve(isSuccess);
    } else{
        return Promise.reject();
    }
}
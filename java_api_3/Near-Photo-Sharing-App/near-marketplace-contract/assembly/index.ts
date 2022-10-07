import { Picture, album } from "./models";

export function uploadPicture(picture: Picture): void {
    let image = album.get(picture.id);
    if(image != null ) {
        throw new Error ('This picture exist already');
    }
    album.set(picture.id, Picture.fromPayload(picture));
}

export function getPicture(id: string): Picture | null {
    return album.get(id);
}

export function getAllPictures(): Array<Picture> {
    return album.values();
}
export function likePicture(id: string, like: u8): bool {
    const picture = album.get(id);

    if(picture != null){
        return picture.countLike(like);
    }else {
        return false;
    }
}

export function getAllLikes(id: string): Array <u64> | null {
    const picture = album.get(id);

    if(picture == null){
        return null;
    } else {
        let likesNumber = new Array<u64>(2);
        likesNumber[0] = picture.removelikes.size;
        likesNumber[1] = picture.addlikes.size;
        return likesNumber;
    }
}
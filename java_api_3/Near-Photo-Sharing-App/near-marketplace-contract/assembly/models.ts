import { PersistentUnorderedMap, context, PersistentSet, u128 } from "near-sdk-as";

@nearBindgen
export class Picture {
    id: string;
    price: u128;
    name: string;
    image: string;
    owner: string;
    addlikes: PersistentSet<string>;
    removelikes: PersistentSet<string>;

    public static fromPayload(payload: Picture): Picture {
        const picture = new Picture();
        picture.id = payload.id;
        picture.price = picture.price;
        picture.name = payload.name;
        picture.image = payload.image;
        picture.owner = payload.owner;
        picture.addlikes = payload.addlikes;
        picture.removelikes = payload.removelikes;

        return picture;
    }

    public countLike(number: u8): bool {

        const senderAccount = context.sender;
        assert(!(this.addlikes.has(senderAccount)), "already liked this picture");
        assert(!(this.removelikes.has(senderAccount)), "already like this picture");

        assert((number == 0 || number == 1), "invalid");

        switch(number) {
            case 0:
                this.removelikes.add(senderAccount);
                return true;

            case 1:
                this.addlikes.add(senderAccount);
                return true;
        }

        return false;
        
    }

}

export const album = new PersistentUnorderedMap<string, Picture>("PICTURES")
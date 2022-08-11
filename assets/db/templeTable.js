import Realm from "realm";
import {SQLite} from 'expo';
class Temples extends Realm.Object { }
Contact.schema = {
    name: "Temple",
    properties: {
        templeID: "uuid",
        templeName: "string",
        address: "string",
        phone: "int",
        password: "string"
    },
    primaryKey: "templeID",
};

export default new Realm({ schema: [Temples] });
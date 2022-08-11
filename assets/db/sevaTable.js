import Realm from "realm";

class Sevas extends Realm.Object { }
Contact.schema = {
    name: "Seva",
    properties: {
        sevaID: "uuid",
        sevaName: "string",
        sevaDate: "date",
        description: "string",
        price: "int"
    },
    primaryKey: "sevaID",
};

export default new Realm({ schema: [Sevas] });
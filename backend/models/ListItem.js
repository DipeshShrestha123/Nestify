import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: [String],
    bedRooms: Number,
    bathRooms: Number,
    latitude: Number,
    longitude: Number,
    price: Number,
    location: String,
    country: String,
    Adress: String
});

const ListItem = mongoose.model("ListItem", listSchema);
export default ListItem;

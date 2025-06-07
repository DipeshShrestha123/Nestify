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
  country: String,
  address: String,
  type: {
    type: String,
    enum: ["buy", "rent"],
    required: true,
  },
});

const ListItem = mongoose.model("ListItem", listSchema);
export default ListItem;

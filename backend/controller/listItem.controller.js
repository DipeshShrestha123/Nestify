import ListItem from "../models/ListItem.js";
import User from "../models/user.js";
export const getAllListings = async (req, res) => {
  try {
    const listings = await ListItem.find();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching listings", error });
  }
};

export const getListingById = async (req, res) => {
  try {
    const listing = await ListItem.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: "Listing not found" });
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: "Error fetching listing", error });
  }
};

export const addPost = async (req, res) => {
  try {
    const newPost = new ListItem(req.body);
    await newPost.save();
    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
};

export const updateProfile = async (req, res) => {
  const { username, email, avatar } = req.body;
  const userId = req.user.user_id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email, image: avatar },
      { new: true, runValidators: true }
    );
    console.log("Decoded user from token:", req.user);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating profile",
      error: error.message,
    });
  }
};

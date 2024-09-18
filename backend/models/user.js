const mongoose = require("mongoose");
const schema = mongoose.Schema;


const userSchema = new schema({
    username: {
      type: String,
      required: true,
      unique: true, // Ensure usernames are unique
      trim: true, // Remove any extra whitespace
      minlength: 3, // Minimum length for username
      maxlength: 30 // Maximum length for username
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email addresses are unique
      trim: true,
      lowercase: true, // Convert email to lowercase
      minlength: 5, // Minimum length for email
      maxlength: 255, // Maximum length for email
      match: /.+\@.+\..+/ // Basic email format validation
    },
    password: {
      type: String,
      required: true,
      minlength: 6 // Minimum length for password
    },
    createdAt: {
      type: Date,
      default: Date.now // Automatically set to the current date/time
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      // Using a setter to update the timestamp on save
      set: function () {
        return new Date();
      }
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
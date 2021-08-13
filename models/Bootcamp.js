const mongoose = require("mongoose");

// Website Regular Expression for matching
const websiteRegX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

// Email Regular Expression for matching
const emailRegX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// ----------------(Defining the Bootcamp Schema)----------------(
const BootcampSchema = new mongoose.Schema({
  // Name
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlenght: [50, "Name cannot be more than 50 Characters"],
  },

  // Slug
  slug: String,

  // Description
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlenght: [500, "Name cannot be more than 500 Characters"],
  },

  // Website
  website: {
    type: String,
    match: [websiteRegX, "Please use a valid URL with HTTP or HTTPS"],
  },

  // Phone Number
  phone: {
    type: String,
    maxlenght: [20, "Phone number cannot be longer than 20 characters"],
  },

  // Email
  email: {
    type: String,
    match: [emailRegX, "Please add a valid email"],
  },

  // Address
  address: {
    type: String,
    required: [true, "Please add an address"],
  },

  // Location
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },

    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere",
    },

    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },

  // Careers
  careers: {
    type: [String],
    required: true,
    enum: [
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Data Science",
      "Software Engineer",
      "DevOps",
      "Sotware Architecture",
      "Buisness",
      "Other",
    ],
  },

  // Average Rating
  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating cannot be more than 10"],
  },

  // Average Cost
  averageCost: Number,

  // Photo
  photo: {
    type: String,
    default: "no-photo.jpg",
  },

  // Housing
  housing: {
    type: Boolean,
    default: false,
  },

  // Job Assistance
  jobAssistance: {
    type: Boolean,
    default: false,
  },

  // Job Gurantee
  jobGurantee: {
    type: Boolean,
    default: false,
  },

  // Accept Gi
  acceptGi: {
    type: Boolean,
    default: false,
  },

  // Created At
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);

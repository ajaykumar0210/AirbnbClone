const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description: String,

    image: {
        type: String,
        default: "https://www.pexels.com/photo/vibrant-peacock-displaying-plumage-in-chile-32522678/",
        set: (v)=> v==="" ? "https://www.pexels.com/photo/vibrant-peacock-displaying-plumage-in-chile-32522678/" : v,
      // url: String,
      // filename: String,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        unique: true
    },
    tweets: [ //array of objects
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

const Hashtag = mongoose.model('Hashtag', hashtagSchema);

export default Hashtag;
import Tweet from '../models/tweet.js';

class TweetRepository{
    async create(data){
        try{
            const tweet= await Tweet.create(data);
            return tweet;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async getAll() {
        try {
            const tweets = await Tweet.find({});
            return tweets;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async delete(data) {
        try {
            const tweet = await Tweet.deleteOne(data);
            return tweet;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default TweetRepository;
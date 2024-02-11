import Hashtag from '../models/hashtag.js';

class HashtagRepository {
    async create(data) {
        try {
            const hashtag = await Hashtag.create(data);
            return hashtag;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async bulkCreate(data){
        try{
            const tags= await Hashtag.insertMany(data);
            return tags;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async getHashtagByName(text){
        try{
            const hashtags= await Hashtag.find({
                text: text
            })
            return hashtags;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async get(id) {
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(data) {
        try {
            const response = await Hashtag.deleteOne(data);
            return response;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default HashtagRepository;
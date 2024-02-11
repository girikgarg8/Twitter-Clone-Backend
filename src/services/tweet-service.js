import HashtagRepository from "../repositories/hashtag-repository.js";
import TweetRepository from "../repositories/tweet-repository.js";

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content
            .match(/#+[a-zA-Z0-9(_)]+/g)
            .map((tag) => tag.substring(1)
                .toLowerCase());

        //storing the tweet
        const tweet = await this.tweetRepository.create(data);

        //checking which hastags already exist in the database. We would be creating those hashtags which don't already exist.

        const alreadyPresentTags = tags.map(async (tag) => {
            const response = await this.hashtagRepository.findByName(tags);
            if (response) return tag;
        })

        const textOfPresentTags = alreadyPresentTags.map((tags) => tags.text);

        const newTags = tags.filter((tag) => !textOfPresentTags.includes(tag));

        newTags = newTags.map(tag => {
            return {
                text: tag,
                tweets: [tweet.id]
            }
        })

        await this.hashtagRepository.bulkCreate(newTags);

        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return tweet;
    }

    async getTweet(tweetId) {
        const tweet = await this.tweetRepository.get(tweetId);
        return tweet;
    }
}

export default TweetService;
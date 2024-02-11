### Requirements of the project

1. User should be able to post a tweet.

2. User should be able to authenticate themselves.

3. Other users should be able to like and unlike a tweet.

4. Other users should be able to tweet to a tweet.

5. Other users should be able to retweet.

6. Users should be able to visit a profile and follow.

7. Users should be able to search tweets via a hashtag.

Based on the requirements above, we can identify the models as:

    (USER model)
    - UserName
    - Email
    - Password
    - Number of followers
    - List of Tweets
    - Bio
    - Number of retweets

    (TWEET model)
    - Content (maximum of 250 characters)
    - Image Upload
    - Likes
    - Comment Tweets
    - Hashtags

    (HASHTAG model)
    - Word
    - List of tweets
    - Ranking

    (LIKE model) (Like can only be on a comment or a tweet)
    - TweetId
    - UserId

    (Comment model) 
    - UserId
    - LikeId
    - Content
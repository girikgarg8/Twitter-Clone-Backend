We are using Mongoose as the ODM (Object Document Mapping) to interact with our database in an object oriented fashion.

The top down hierarchy of MongoDB is like: Cluster -> Database -> Schema (Blueprint, like a class) -> Model (like a on object) -> Collection (Analogous to table in SQL databases) -> Document (Analogous to row in SQL databases)

Corresponding to every document, we have a unique ID which is automatically created by MongoDB. This is a unique identifier for every document in the collection.

In order to create hashtag, we will have to go through the tweet and search for all hashtags. As an example, if the tweet is "Let's see who win's today #IndVsPak #ILoveIndia", we will have to go through the tweet and extract the hashtags. For this functionality, we will match the regex (for hashtag) in our input tweet and extract the hashtags.
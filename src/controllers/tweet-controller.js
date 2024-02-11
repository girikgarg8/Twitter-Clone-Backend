import TweetService from "../services/tweet-service.js";

import SuccessReponse from "../utils/common/success-response.js";

import ErrorResponse from "../utils/common/error-response.js";

import { StatusCodes } from "http-status-codes";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        const data = req.body;
        const response = await tweetService.create(data);
        SuccessReponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessReponse);
    }
    catch (error) {
        console.log(error);
        ErrorResponse.error = error;
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}

export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        SuccessReponse.data = response;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessReponse);
    }
    catch (error) {
        console.log(error);
        ErrorResponse.error = error;
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}
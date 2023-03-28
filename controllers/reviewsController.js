const {
  fetchReview,
  fetchReviews,
  fetchReviewComments,
  insertComment,
} = require("../models/reviewsModel");

exports.getReview = (req, res, next) => {
  const reviewId = req.params.review_id;
  fetchReview(reviewId)
    .then((data) => {
      res.status(200).send({ reviewObj: data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getReviews = (req, res, next) => {
  fetchReviews()
    .then((data) => {
      res.status(200).send({ reviews: data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getReviewComments = (req, res, next) => {
  const reviewId = req.params.review_id;
  fetchReviewComments(reviewId)
    .then((data) => {
      res.status(200).send({ comments: data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postComment = (req, res) => {
  const reviewId = req.params.review_id;
  const { username, body } = req.body;
  insertComment(username, body, reviewId).then((commentObject) => {
    res.status(201).send({ comment: commentObject.body });
  });
};

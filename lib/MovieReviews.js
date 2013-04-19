window.MovieReview = function ($) {

  Review = function (values) {

  };

  ReviewSummary = function(reviews){

  };

  MovieLocatorService = function (movies) {

  };

  MovieReviewService = function () {

  };

  MovieReviewSummaryView = function (reviewService, locatorService){

  };

  return {
    Review: Review,
    ReviewSummary: ReviewSummary,
    MovieReviewService: MovieReviewService,
    MovieLocatorService: MovieLocatorService,
    MovieReviewSummaryView: MovieReviewSummaryView
  };

}(window.jQuery);
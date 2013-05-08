window.MovieReview = function ($) {

  Review = function (values) {

  };

  ReviewSummary = function(reviews){

  };

  MovieLocatorService = function (movies) {
    this.movies = movies;
  };
  MovieLocatorService.prototype.get = function() {
    return this.movies;
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
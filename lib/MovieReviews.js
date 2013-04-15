window.MovieReview = function ($) {

  Review = function () {

  };

  ReviewSummary = function(){

  };

  MovieLocatorService = function (movies) {
    this.movies = movies;
  };

  MovieReviewService = function () {

  };

  MovieView = function (reviewService, locatorService){

  };

  return {
    Review: Review,
    MovieReviewService: MovieReviewService,
    MovieLocatorService: MovieLocatorService,
    MovieView: MovieView
  };

}(window.jQuery);
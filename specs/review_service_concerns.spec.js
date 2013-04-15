describe('Given I have a Movie Review Service', function () {
  describe('when submitting a review and I provide a callback function', function (){
    it('should call the provided callback with confirmation that the submit was successful', function (done) {
      var reviewService = new MovieReview.MovieReviewService();
      reviewService.submit(reviews_test_data[0], function(success) {
        expect(success).to.be(true);
        done();
      });
    });

    it("should call the provided callback with the 'this' object set to the instance of the review service", function (done) {
      var reviewService = new MovieReview.MovieReviewService();
      reviewService.submit(reviews_test_data[0], function() {
        expect(this).to.be(reviewService);
        done();
      });
    });
  });
});

describe('Given I have a Movie Review Service with many different review submitted', function () {
  describe('when getting a review summary for a specific movie', function () {
    it('should provide a summary of the reviews for that movie.', function () {
      var reviewService = createPopulatedReviewService();

      var reviewsForMovies = [reviews_test_data[0], reviews_test_data[1]];
      var expected = new MovieReview.ReviewSummary(reviewsForMovies);
      expect(reviewService.getSummaryFor(movie_test_data[0])).to.eql(expected);
    });

    it('should provide the mean review score (to 1 decimal place) for that movie.', function () {
      var reviewService = createPopulatedReviewService();

      var expected = 0.5;
      expect(reviewService.get({ movie: movie_test_data[0] }).averageScore).to.be(expected);
      expect(reviewService.get({ movie: movie_test_data[1] }).averageScore).to.be(expected);
    });
  });
});




function createPopulatedReviewService(){
  var reviewService = new MovieReview.MovieReviewService();
  reviews_test_data.forEach(function (review) {
    reviewService.submit(review);
  });
  return reviewService;
}
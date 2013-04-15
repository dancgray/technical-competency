describe('Given I have a name, email, movie and review score', function () {
  describe('when creating a review model', function () {
    it('should provide a review with the correct reviewer name', function () {
      var expected = reviews_test_data[0];
      var actual = new MovieReview.Review(reviews_test_data[0]);
      expect(actual.name).to.be(expected.name);
    });
    it('should provide a review with the correct email', function () {
      var expected = reviews_test_data[0];
      var actual = new MovieReview.Review(reviews_test_data[0]);
      expect(actual.email).to.be(expected.email);
    });
    it('should provide a review with the correct review score', function () {
      var expected = reviews_test_data[0];
      var actual = new MovieReview.Review(reviews_test_data[0]);
      expect(actual.score).to.be(expected.score);
    });
    it('should provide a review with the correct movie', function () {
      var expected = reviews_test_data[0];
      var actual = new MovieReview.Review(reviews_test_data[0]);
      expect(actual.movie).to.be(expected.movie);
    });
  });
});
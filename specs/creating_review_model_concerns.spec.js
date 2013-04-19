describe('As a Movie Reviewer I want to be able to create a movie review with my details and my review (comment and score), Given I have a my name, my comment, my email, a movie and my review score', function () {
  describe('when creating a review', function () {
    it('should provide a review with the correct reviewer name', function () {
      console.log(reviews_test_data)
      var expected = reviews_test_data[0];
      var actual = new MovieReview.Review(reviews_test_data[0]);
      expect(actual.name).to.be(expected.name);
    });
    it('should provide a review with the correct comment', function () {
      var expected = reviews_test_data[0];
      var actual = new MovieReview.Review(reviews_test_data[0]);
      expect(actual.comment).to.be(expected.comment);
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

  var movie_test_data = [
    {
      title: 'Movie A',
      releaseDate: new Date('2013-01-01'),
      cast: [],
      crew: [
        { credit: 'Director', name: 'Michelle S. Smith' },
        { credit: 'Producer', name: 'Kate Hensley' }
      ]
    }
  ];
  var reviews_test_data = [
    {
      name: "A Reviewer",
      comment: "I like this movie.",
      email: "a@example.com",
      score: 0.6,
      movie: movie_test_data[0]
    }
  ];
});

describe('Given I have a blank name, email, movie id and review score', function () {
  describe('when creating a review model', function () {
    it('should cause a name not valid error', function (){
      expect(function(){
        new MovieReview.Review({
          name: "",
          comment: "I like this movie.",
          email: "a@example.com",
          score: 0.6,
          movie: {
            title: 'Movie A',
            releaseDate: new Date('2013-01-01'),
            cast: [],
            crew: [
              { credit: 'Director', name: 'Michelle S. Smith' },
              { credit: 'Producer', name: 'Kate Hensley' }
            ]
          }
        });
      }).to.throwException(/The name is not valid/)
    });
  });
});

describe('Given I have a name, an invalid email, movie id and review score', function () {
  describe('when creating a review model', function () {
    it('should cause an email not valid error', function (){
      expect(function(){
        new MovieReview.Review({
          name: "Reviewer",
          comment: "I like this movie.",
          email: "not_valid_email_address",
          score: 0.6,
          movie: {
            title: 'Movie A',
            releaseDate: new Date('2013-01-01'),
            cast: [],
            crew: [
              { credit: 'Director', name: 'Michelle S. Smith' },
              { credit: 'Producer', name: 'Kate Hensley' }
            ]
          }
        });
      }).to.throwException(/The email is not valid/)
    });
  });
});

describe('Given I have a name, email, missing movie id and review score', function () {
  describe('when creating a review model', function () {
    it('should cause a missing movie error', function () {
      expect(function(){
        new MovieReview.Review({
          name: "Reviewer",
          comment: "I like this movie.",
          email: "a@example.com",
          score: 0.6
        });
      }).to.throwException(/The movie is missing/)
    });
  });
});

describe('Given I have a name, email, movie id and negative review score', function () {
  describe('when creating a review model', function () {
    it('should cause an invalid score error', function (){
      expect(function(){
        new MovieReview.Review({
          name: "Reviewer",
          comment: "I like this movie.",
          email: "a@example.com",
          score: -1,
          movie: {
            title: 'Movie A',
            releaseDate: new Date('2013-01-01'),
            cast: [],
            crew: [
              { credit: 'Director', name: 'Michelle S. Smith' },
              { credit: 'Producer', name: 'Kate Hensley' }
            ]
          }
        });
      }).to.throwException(/The score is invalid/)
    });
  });
});

describe('Given I have a name, email, movie id and review score greater than 1', function () {
  describe('when creating a review model', function () {
    it('should cause an invalid score error', function (){
      expect(function(){
        new MovieReview.Review({
          name: "Reviewer",
          comment: "I like this movie.",
          email: "a@example.com",
          score: 2,
          movie: {
            title: 'Movie A',
            releaseDate: new Date('2013-01-01'),
            cast: [],
            crew: [
              { credit: 'Director', name: 'Michelle S. Smith' },
              { credit: 'Producer', name: 'Kate Hensley' }
            ]
          }
        });
      }).to.throwException(/The score is invalid/)
    });
  });
});

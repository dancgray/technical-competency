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
    it('should cause a missing move error', function () {
    it('should cause an email not valid error', function (){
      expect(function(){
        new MovieReview.Review({
          name: "Reviewer",
          comment: "I like this movie.",
          email: "a@example.com",
          score: 0.6
        });
      }).to.throwException(/The movie is mising/)
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
      }).to.throwException(/The movie score is invalid/)
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
      }).to.throwException(/The movie score is invalid/)
    });
  });
});

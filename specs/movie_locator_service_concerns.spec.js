describe('Given I have a Movie Locator Service and its been initialised with a list of movies', function () {
  describe('when getting all movies', function () {
    it('should provide the list of movies it was initialised with.', function (){
      var locatorService = new MovieReview.MovieLocatorService(movie_test_data);
      expect(locatorService.get()).to.be(movie_test_data);
    });
  });

  describe('when getting all movies by release date', function () {
    it('should provide the list of movies it was initialised with in release date ascending order.', function() {
      var locatorService = new MovieReview.MovieLocatorService(movie_test_data);
      var expectedResult = [movie_test_data[0], movie_test_data[4], movie_test_data[2], movie_test_data[3]];
      expect(locatorService.get({ orderBy: 'releaseDate' })).to.be(expectedResult);
    });
  });

  describe('when finding a movie by directors name', function () {
    it('should provide a list of movies for that director.', function() {
      var locatorService = new MovieReview.MovieLocatorService(movie_test_data);
      var expectedResult = [movie_test_data[0], movie_test_data[2]];
      expect(locatorService.getByDirector('Michelle S. Smith')).to.be(expectedResult);
    });
  });
});


var movie_test_data = [
  {
    title: 'Movie A',
    releaseDate: new Date('2013-01-01'),
    cast: [],
    crew: [
      { credit: 'Director', name: 'Michelle S. Smith' }
    ]
  },
  {
    title: 'Movie B',
    releaseDate: new Date('2013-02-01'),
    cast: [],
    crew: [
      { credit: 'Director', name: 'Ian C. Sandstrom' }
    ]
  },
  {
    title: 'Movie C',
    releaseDate: new Date('2013-03-01'),
    cast: [],
    crew: [
      { credit: 'Director', name: 'Michelle S. Smith' }
    ]
  },
  {
    title: 'Movie D',
    releaseDate: new Date('2013-01-01'),
    cast: [],
    crew: [
      { credit: 'Director', name: 'John K. Quirk' }
    ]
  },
];

var reviews_test_data = [
  {
    name: "A Reviewer",
    comment: "I like this movie.",
    email: "a@example.com",
    score: 0.6,
    movie: movie_test_data[0]
  },
  {
    name: "A Reviewer 2",
    comment: "I dislike this movie.",
    email: "a2@example.com",
    score: 0.3,
    movie: movie_test_data[0]
  },
  {
    name: "B Reviewer",
    comment: "I like this movie.",
    email: "b@example.com",
    score: 0.8,
    movie: movie_test_data[1]
  },
  {
    name: "C Reviewer",
    comment: "I like this movie.",
    email: "c@example.com",
    score: 0.5,
    movie: movie_test_data[2]
  },
  {
    name: "D Reviewer",
    comment: "I dislike this movie.",
    email: "d@example.com",
    score: 0.1,
    movie: movie_test_data[3]
  }
];
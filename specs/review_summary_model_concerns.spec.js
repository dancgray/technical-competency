describe('Given I have a Review Summary Model for many different reviews', function () {
  describe('when getting a review summary for a specific movie', function () {

    it('should provide the mean review score (to 1 decimal place) for that movie.', function () {
      var reviewSummary = new MovieReview.ReviewSummary(reviews_test_data);

      var expected = 0.4;
      expect(reviewSummary.averageScore).to.be(expected);
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
    }
  ];
});
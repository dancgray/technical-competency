
Technical Competency - Javascript
=================================

Movie Reviews
-------------

This is a set of [mocha](http://visionmedia.github.io/mocha/) BDD style tests that define a specification for a fictional Movie Review library.

To view the specifications, clone this repository and open the page

    specs/specrunner.html

As you can see the tests are currently failing!

The subject of the tests is the javascript file

    lib/MovieReviews.js

This module defines some objects that could be used by to create and submit scored movie reviews.

  * Review -
    This model defines a single review for a movie. The movie is score on a points scale, represented by values from 0.0 to 1.0.

  * ReviewSummary -
    This model defines a summary of one or more reviews, and provides a way to get an average (mean) score.

  * MovieReviewService -
    This object provides methods for submitting reviews and getting review summaries.

  * MovieLocatorService -
    This object provides methods for finding and sorting movie information.


Your task is to fix the broken tests, and get this module working again.

[jQuery](http://jquery.com/) and [Underscore](http://underscorejs.org/) are referenced in the page as script tags. If you need to add any addtional dependencies, feel free to do so.


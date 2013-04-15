describe('Given I have a blank name, email, movie id and review score', function () {
  describe('when creating a review model', function () {
    it('should cause a name not valid error');
  });
});

describe('Given I have a name, an invalid email, movie id and review score', function () {
  describe('when creating a review model', function () {
    it('should cause an email not valid error');
  });
});

describe('Given I have a name, email, missing movie id and review score', function () {
  describe('when creating a review model', function () {
    it('should cause an missing move id error');
  });
});

describe('Given I have a name, email, movie id and negative review score', function () {
  describe('when creating a review model', function () {
    it('should cause an invalid score error');
  });
});

describe('Given I have a name, email, movie id and review score greater than 1', function () {
  describe('when creating a review model', function () {
    it('should cause an invalid score error');
  });
});

angular.module('watcher.services', ['ngResource']).
factory('watchRestService', function($resource) {
  return $resource('http://watchservice.jelastic.luxembourgwebservices.com/watchlist/person/:id');
}).
factory('deleteMovieForUserService', function($resource) {
  return $resource('http://watchservice.jelastic.luxembourgwebservices.com/watchlist/person/:personId/deleteMovie/:movieId');
}).
factory('addMovieSeenForUserService', function($resource) {
  return $resource('http://watchservice.jelastic.luxembourgwebservices.com/watchlist/person/:personId/watchedMovie/:movieId');
});

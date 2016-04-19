angular.module('wage.service', [])

.factory('Wage', function ($http) {
  // Your code here

  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addWage = function (wage) {
    return $http({
      method: 'POST',
      url: '/api/',
      data: wage
    });
  };

  return {
    getAll: getAll,
    addWage: addWage
  };
})
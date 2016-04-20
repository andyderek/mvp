angular.module('wageCalculator.service', [])

.factory('Wage', function ($http) {
  // Your code here

  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addWage = function (wage) {
    console.log(wage);
    return $http({
      method: 'POST',
      url: '/api',
      data: {wage: wage}
    }).then(console.log("hello"))
  };

  // var addWage = function(wage) {
  //   $http.post('/api', wage)
  //     .then(function (wage, status, headers) {console.log("success")}),
  //     (function (wage, status, header) {console.log('Failure')});
  // }

  return {
    getAll: getAll,
    addWage: addWage
  };
})
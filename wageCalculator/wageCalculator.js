angular.module('wageCalculator', [])

  .controller('wageCalculatorCtrl', function($scope){
    $scope.wages = 0;
    $scope.hours = {
      regular: 0,
      overtime: 0,
      doubletime: 0
    };
    $scope.totals = function(){
      $scope.wages = ((($scope.hours.regular * 1) + (1.5 * $scope.hours.overtime) + (2 * $scope.hours.doubletime)) * 39.90) * 1.08;
      $scope.addWage($scope.totals)
      .catch(function(err){
        console.log(err);
      })
    };
    
  });

  // .config(function($routeProvider, $httpProvider){
  // $routeProvider
  // .when('/', {
  //   templateUrl: 'wageCalculator/index.html',
  //   controller: 'wageCalculatorCtrl'
  // })
  // });
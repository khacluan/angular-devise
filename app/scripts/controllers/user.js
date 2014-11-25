'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('UserCtrl', function ($scope, Auth) {
    $scope.resource = {};
    $scope.submitLogin = function(resource) {
      Auth.login($scope.resource).then(function(user){
        console.log(user);
      }, function(error) {
        console.log(error);
      });
    }
  });

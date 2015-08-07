(function(){
var myApp = angular.module('bbgapp', []);
    myApp.directive('bbgfooter', function() {
     return {
        restrict: 'E',
        templateUrl: "bbgfooter.html"
      };
    });

    myApp.directive('navbar', function() {
     return {
        restrict: 'E',
        templateUrl: "navbar.html"
      };
    });

    myApp.directive('carousel', function() {
     return {
        restrict: 'E',
        templateUrl: "carousel.html"
      };
    });
    
})();
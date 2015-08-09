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
    
    myApp.directive('newCarousel', function() {
     return {
        restrict: 'E',
        templateUrl: "newCarousel.html"
      };
    });

    myApp.controller('CarouselController', ['$http', function($http){
      var bbgCarousel = this; 
      bbgCarousel.carouselArray = [];
      $http.get('./newCarousel.json').success(function(data){
        bbgCarousel.carouselArray = data;
      });
    }]);

  
})();
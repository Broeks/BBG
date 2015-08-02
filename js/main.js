/**
* Main AngularJS Web Application
*/
var app = angular.module('tutorialWebApp', [
'ngRoute'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
$routeProvider
// Home
.when("/", {templateUrl: "partials/index2.html", <span class="highlight">controller: "PageCtrl"</span>})
// Pages
.when("/about", {templateUrl: "partials/about.html", <span class="highlight">controller: "PageCtrl"</span>})
.when("/articles", {templateUrl: "partials/articles.html", <span class="highlight">controller: "PageCtrl"</span>})
.when("/contact", {templateUrl: "partials/contact.html", <span class="highlight">controller: "PageCtrl"</span>})
/* etc… routes to other pages… */
// Blog
.when("/blog", {templateUrl: "partials/blog.html", <span class="highlight">controller: "BlogCtrl"</span>})
.when("/blog/post", {templateUrl: "partials/blog_item.html", <span class="highlight">controller: "BlogCtrl"</span>})
// else 404
.otherwise("/404", {templateUrl: "partials/404.html", <span class="highlight">controller: "PageCtrl"</span>});
}]);
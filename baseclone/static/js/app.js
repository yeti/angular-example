/**
 * Created by winnietong on 11/3/14.
 */
var app = angular.module('baseclone', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/js/views/home.html', controller: homeController}).
        when('/projects/:id', {templateUrl: '/static/js/views/project.html', controller:projectController}).
//        when('/calendar/', {templateUrl: '/static/js/views/calendar.html', controller: calendarController}).
        otherwise({redirectTo: '/'});
}]);


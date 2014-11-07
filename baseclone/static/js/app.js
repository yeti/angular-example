/**
 * Created by winnietong on 11/3/14.
 */
var baseclone = angular.module('baseclone', ['ngRoute', 'ngResource']);

baseclone.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/js/views/home.html', controller: homeController}).
        when('/projects/:id', {templateUrl: '/static/js/views/project.html', controller:projectController}).
//        when('/calendar/', {templateUrl: '/static/js/views/calendar.html', controller: calendarController}).
        otherwise({redirectTo: '/'});
}]);


function calendarController($scope, $http) {
    $http.get('/proxy/projects.json').
        success(function(projectsResponse) {
            $scope.projects = projectsResponse;
            console.log(projectsResponse);
        }).
        error(function(errorResponse) {
            console.log(errorResponse);
    });


}
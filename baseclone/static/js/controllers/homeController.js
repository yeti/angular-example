function homeController($scope, $http) {
    $http.get('/proxy/projects.json').
        success(function(projectsResponse) {
            $scope.projects = projectsResponse;
            console.log(projectsResponse);
        }).
        error(function(errorResponse) {
            console.log(errorResponse);
    });

    $scope.newProject = function(){
        $http.post('/proxy/projects.json', {"name": $scope.projectName, "description": $scope.projectDescription}).
            success(function(response){
                console.log(response);
                $scope.projects.unshift(response);
            }).error(function(response) {
              console.log("didn't work");
        });
    }

}
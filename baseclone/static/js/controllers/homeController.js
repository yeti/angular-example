function homeController($scope, $http, ProjectFactory) {

    ProjectFactory.getProjects(function(response) {
        $scope.projects = response;
        ProjectFactory.projectList = $scope.projects;
    });

    $scope.deleteProject = function(project) {
        ProjectFactory.deleteProject(project, function () {
            var index = $scope.projects.indexOf(project);
            if (index > -1) {
                $scope.projects.splice(index, 1);
            }

        });
    };

//    $http.get('/proxy/projects.json').
//        success(function(projectsResponse) {
//            $scope.projects = projectsResponse;
//            console.log(projectsResponse);
//        }).
//        error(function(errorResponse) {
//            console.log(errorResponse);
//    });
//
//    $scope.newProject = function(){
//        $http.post('/proxy/projects.json', {"name": $scope.projectName, "description": $scope.projectDescription}).
//            success(function(response){
//                console.log(response);
//                $scope.projects.unshift(response);
//            }).error(function(response) {
//              console.log("didn't work");
//        });
//    }

}
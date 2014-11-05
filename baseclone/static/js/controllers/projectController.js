function projectController($scope, $http, $routeParams) {
    var projectId = $routeParams.id;
    $http.get('/proxy/projects/' + projectId + '.json').
        success(function(data){
            $scope.project = data;
        }).error(function(data) {
            console.log("didn't work");
        });
}
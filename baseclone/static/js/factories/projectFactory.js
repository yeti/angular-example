baseclone.factory('ProjectFactory', function($http) {
    return {
        projectList: [],
        getProjects: function(callback) {
            $http.get('/proxy/projects.json')
                .success(function(response) {
                    callback(response);

            }).error(function(error) {
                    console.log(error);
                });
        }
    }
});
/* Controllers */

function ProfilesController($scope, ProfilesService) {
    ProfilesService.query(function (data) {
        $scope.profiles = data;
    });
}

ProfilesController.$inject = ['$scope', 'ProfilesService'];

/* EOF */
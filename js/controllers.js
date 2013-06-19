/* Controllers */

function ProfilesController($scope, ProfilesService, PageWrapperService) {
    ProfilesService.query(function (data) {
        $scope.profiles = data;
    });
    PageWrapperService.query(function (data) {
        $scope.wrapper = data;
    });
}

ProfilesController.$inject = ['$scope', 'ProfilesService', 'PageWrapperService'];

/* EOF */
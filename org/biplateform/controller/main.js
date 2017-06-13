/**
 * Created by wuxueyou on 2017/6/13.
 */

biPlateform.controller('mainController', function ($scope, $stateParams, httpService) {
    $scope.test = "bbb";
    var c = $stateParams.id;
    console.log(c);

    httpService.postData("/request/post", null, function (data) {
        console.log(data);
    }, function (data) {
        console.error(data);
    });

    httpService.getData("/request/get", function (data) {
        console.log(data);
    }, function (data) {
        console.log(data);
    });
});
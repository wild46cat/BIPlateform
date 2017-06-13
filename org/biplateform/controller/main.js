/**
 * Created by wuxueyou on 2017/6/13.
 */

biPlateform.controller('mainController',function ($scope,$stateParams,$http) {
   $scope.test = "bbb";
    var c = $stateParams.id;
    console.log(c);
    $http.get("www.baidu.com").success(function (data) {
        console.log(data);
    }).error(function (data) {
        console.log(data);
    });
});
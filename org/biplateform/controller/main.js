/**
 * Created by wuxueyou on 2017/6/13.
 */

biPlateform.controller('mainController', function ($scope, $stateParams, httpService) {
    $scope.test = "bbb";
    //传参数
    // var c = $stateParams.id;
    // console.log(c);

    //http请求实例
    // httpService.postData("/request/post", null, function (data) {
    //     console.log(data);
    // }, function (data) {
    //     console.error(data);
    // });
    //
    // httpService.getData("/request/get", function (data) {
    //     console.log(data);
    // }, function (data) {
    //     console.log(data);
    // });
});
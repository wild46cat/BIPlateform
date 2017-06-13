/**
 * Created by wuxueyou on 2017/6/14.
 */
biPlateform.service('httpService', function ($http) {
    this.getData = function (url, success, error) {
        $http.get(Setting.BASE_URL + url).success(function (data, status, headers) {
            success(data, status, headers);
        }).error(function (data, status, headers) {
            error(data, status, headers);
        });
    };

    this.postData = function (url, params, success, error) {
        $http.post(Setting.BASE_URL + url, params).success(function (data, status, headers) {
            success(data, status, headers);
        }).error(function (data, status, headers) {
            error(data, status, headers);
        })
    }
});
/**
 * Created by wuxueyou on 2017/6/13.
 */

biPlateform.config(function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/main');
    $stateProvider
        .state('main', {
            url: '/main',
            params:{id:'',name:''},
            templateUrl: 'org/biplateform/pages/main.html',
            controller:'mainController'
        })
        .state('photos', {
            url: '/photos',
            templateUrl: 'partials/photos.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html'
        })
});

biPlateform.factory('sessionHelper', ["$rootScope", "$q", function ($rootScope, $q) {
    var sessionHelper = {
        responseError: function (response) {
            if (response.data.status == 2) {
                if ($rootScope.alert) {
                    $rootScope.alert(response.data.msg);
                }
            }
            return $q.reject(response);
        }
    };
    return sessionHelper;
}]);

biPlateform.config(function ($httpProvider) {
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function (data) {
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function (obj) {
            var query = '';
            var name, value, fullSubName, subName, subValue, innerObj, i;

            for (name in obj) {
                value = obj[name];

                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + '='
                        + encodeURIComponent(value) + '&';
                }
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };

        return angular.isObject(data) && String(data) !== '[object File]'
            ? param(data)
            : data;
    }];

    $httpProvider.interceptors.push('sessionHelper');

});

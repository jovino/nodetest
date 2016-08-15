app.factory('navigationService', function($http, $q){
   var getItems = function () {
 
            var deferred = $q.defer();
 
            $http({method: 'GET', url: "/api"}).success(function (data) {
                deferred.resolve(data); 
            });
 
            return deferred.promise;
        };
        
        return{
            getItems: getItems
        }
});
app.directive('navigation', function (navigationService, runtimeStates) {
        return {
            restrict: 'E',
            templateUrl: '/tpl/navigation.html',
            scope: {
                collectionName: '@'
            },
            controller: function ($scope, $timeout) {
                    navigationService.getItems().then(function(table){
                        $scope.tables = table.rows;
                           $scope.tables.forEach(function(element) {
                            var state = {
                                "name": element.name,
                                "url": "/" + element.name,
                                "abstract": false,
                                    params: {"collection": element.name},
                                "views": {}};
                        state.views["content"]=
                            {
                                "template": element.html,
                                  controller: 'MainRootCtrl'
                              
                            
                           };
                            runtimeStates.addState(state);
                        }, this);
                    })

            }
        };
    }
);
app.controller('MainRootCtrl', function($scope, $state, $stateParams) {
    //..
    var foo = $stateParams.foo; //getting fooVal
    var bar = $stateParams.bar; //getting barVal
    //..
    $scope.state = $state.current
    $scope.params = $stateParams; 
})
app.controller("testController", [function(){
    console.log("hola");
}])
app.directive("templatedfield", function( $compile) {
    
  return {
         link: function(scope, element, attrs) {
           scope.getContentUrl = function() {
                return  "/tpl/fieldtypes/" + scope.type + ".tpl.html";
           }
           scope.getController = function() { return testController}
       },
replace: true,

    scope: {    
        type: '=',
        model:'='
    },
 template: '<div  ng-include="getContentUrl()"></div>',
    restrict: 'E',
    
  };
});
     var app = angular.module('starterApp', [
       'ngMaterial',
      'md.data.table',
      'ui.router', 
      'ngAnimate',
      'ui.ace'
       
      ]);


  app.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          abstract: true,
          views: {  'content': {templateUrl:'/html/layout.html' }, 
        
      }
        })
        .state('home.index', 
        {
          url: '/index',
          views: { 'main': {
          templateUrl:'/views/home.html' }}
        });
      $urlRouterProvider.otherwise('home/index');
    });

    app.provider('runtimeStates', function runtimeStates($stateProvider) {
  // runtime dependencies for the service can be injected here, at the provider.$get() function.
  this.$get = function($q, $timeout, $state) { // for example
    return { 
      addState: function(name, state) { 
        $stateProvider.state(name, state);
      }
    }
  }
});
app.controller('AceCtrl', ['$scope', function ($scope) {

    // The modes
    $scope.modes = ['Scheme', 'XML', 'Javascript'];
    $scope.mode = $scope.modes[0];


    // The ui-ace option
    $scope.aceOption = {
      mode: $scope.mode.toLowerCase(),
      onLoad: function (_ace) {

        // HACK to have the ace instance in the scope...
        $scope.modeChanged = function () {
          _ace.getSession().setMode('ace/mode/' + $scope.mode.toLowerCase());
        };

      }
    };

    // Initial code content...
    $scope.aceModel = ';; Scheme code in here.\n' +
      '(define (double x)\n\t(* x x))\n\n\n' +
      '<!-- XML code in here. -->\n' +
      '<root>\n\t<foo>\n\t</foo>\n\t<bar/>\n</root>\n\n\n' +
      '// Javascript code in here.\n' +
      'function foo(msg) {\n\tvar r = Math.random();\n\treturn "" + r + " : " + msg;\n}';

  }]);
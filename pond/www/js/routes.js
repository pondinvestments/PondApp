angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('mainPage', {
    url: '/page2',
    templateUrl: 'templates/mainPage.html',
    controller: 'mainPageCtrl'
  })

  .state('history', {
    url: '/page12',
    templateUrl: 'templates/history.html',
    controller: 'historyCtrl'
  })

  .state('roundUpsPercentage', {
    url: '/page3',
    templateUrl: 'templates/roundUpsPercentage.html',
    controller: 'roundUpsPercentageCtrl'
  })

  .state('invest', {
    url: '/page10',
    templateUrl: 'templates/invest.html',
    controller: 'investCtrl'
  })

  .state('statements', {
    url: '/page4',
    templateUrl: 'templates/statements.html',
    controller: 'statementsCtrl'
  })

  .state('performance', {
    url: '/page8',
    templateUrl: 'templates/performance.html',
    controller: 'performanceCtrl'
  })

  .state('withdrawDeposit', {
    url: '/page9',
    templateUrl: 'templates/withdrawDeposit.html',
    controller: 'withdrawDepositCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page7',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('pond', {
    url: '/page11',
    templateUrl: 'templates/pond.html',
    controller: 'pondCtrl'
  })

$urlRouterProvider.otherwise('/page11')


});
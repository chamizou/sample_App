angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: '演歌', id: 6 },
    { title: 'HipHop', id:7},
    { title: 'JPop', id:8},
    { title: 'KPop', id:9}
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams, $http, $ionicPopup ) {
    console.log($stateParams);
    var play = JSON.parse($stateParams.playlist);
    $scope.title = play.title

    $http({
    method : 'GET',
    url : 'https://itunes.apple.com/search?term='+ $scope.title +'&limit=10&country=JP&entity=song'
    }).success(function(data, status, headers, config) {
    $scope.results = data.results;
    console.log(status);
    console.log(data);
    }).error(function(data, status, headers, config) {
    console.log(status);
    });

  $scope.showAlert = function(result) {
     var alertPopup = $ionicPopup.alert({
       title: '視聴',
       template: result.collectionName + 'を視聴しますか？'

     });

     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };






});

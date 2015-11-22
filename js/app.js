var app = angular.module("scoringApp", ['ngRoute','firebase', 'ui.bootstrap', 'ngAnimate']);

app.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        var ref = new Firebase("https://tiefighterapp.firebaseio.com", "Tie Fighters");
        return $firebaseAuth(ref);
    }
]);

app.controller("authenticationController", ["$scope", "Auth", function($scope, Auth) {
    $scope.auth = Auth;
    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
        $scope.authData = authData;
    });
}]);
app.controller("statsController", ["$scope", "Auth", function($scope, Auth) {
    //if(Auth)
}]);
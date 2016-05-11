angular.module('teaApp',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
        .when('/',{
		templateUrl: 'nav.html',
		controller: 'navController'
	})
        .when('/route/one',{
        templateUrl: 'one.html',
        controller: 'oneController'
    });
}])
.controller('navController',function($scope){

});

$(".myDiv").
    tooltip({
        trigger:'hover',
        html:true,
        title:'鼠标滑动提示'}).popover({
        trigger:'click',
        placement:'bottom',
        content:'弹出气泡提示'});
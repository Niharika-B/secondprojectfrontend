/**
 * Angular Js Module
 */
var app=angular.module("app",['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	
	.when('/editprofile',{
		templateUrl:'views/updateprofile.html',
		controller:'UserController'
	})
	
	.when('/jobform',{
		templateUrl:'views/jobform.html',
		controller:'JobController'
	})
	.when('/jobtitle',{
		templateUrl:'views/jobtitle.html',
		controller:'JobController'
	})
	.when('/blog',{
		templateUrl:'views/blogform.html',
		controller:'BlogController'
	})
.when('/bloglist', {
		templateUrl : 'views/bloglist.html',
		controller : 'BlogController'
	})
.when('/admin/getblog/:id', {
		templateUrl : 'views/approval.html',
		controller : 'BlogDetails'
	})
	
	
	.when('/getblog/:id',{
		templateUrl : 'views/blogdetails.html',
		controller : 'BlogDetails'
	}) 
	.when('/suggesteduserslist',{
		templateUrl:'views/suggestedusers.html',
		controller:'FriendController'
	})
	.when('/pendingfriendrequests',{
		templateUrl:'views/pendingrequest.html',
		controller:'FriendController'
	})
	.when('/getUserDetails/:fromid',{
		templateUrl:'views/userdetails.html',
		controller:'FriendDetailController'
	})
	.when('/friendslist',{
		templateUrl:'views/listoffriends.html',
		controller:'FriendController'
	})
	
	
	.when('/profilepic',{
		templateUrl: 'views/profilepic.html'
	})
.when('/chat',{
		templateUrl:'views/chat.html',
		controller: 'ChatController'
	})
	
	.otherwise({templateUrl:'views/home.html'})
})
app.run(function($rootScope,$cookieStore,UserService,$location){
	if($rootScope.currentUser==undefined)
		$rootScope.currentUser=$cookieStore.get('currentUser')
		
	$rootScope.logout=function(){
		/*
		 * Call middleware logout url -> Middleware - remove HttpSession attribute,update online status to false
		 * on success - in frontend , remove cookieStore attribute currentUser, delete $rootScope.
		 */
		UserService.logout().then(function(response){
			delete $rootScope.currentUser;
			$cookieStore.remove('currentUser')
			$location.path('/login')
			
		},function(response){
			console.log(response.status)
			$location.path('/login')
		})
	}
})
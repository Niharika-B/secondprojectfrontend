/**
 * FriendService
 */

app.factory('FriendService',function($http){
	var friendService={}
	
	
	friendService.listOfSuggestedUsers=function(){
		return $http.get("http://localhost:8080/Pro2Middleware/suggestedusers")
	}
	friendService.friendRequest=function(toid){
		return $http.post("http://localhost:8080/Pro2Middleware/friendRequest"+toid)
	}
	friendService.listOfPendingRequests=function(){
		return $http.get("http://localhost:8080/Pro2Middleware/pendingrequest")
	}
	friendService.getUserDetails=function(fromid){
		return $http.get("http://localhost:8080/Pro2Middleware/getuserdetails"+fromid)
	}
	friendService.updateRequest=function(pendingRequest){
		return $http.put("http://localhost:8080/Pro2Middleware/updatependingrequest",pendingRequest)
	}
	friendService.listOfFriends=function(){
		return $http.get("http://localhost:8080/Pro2Middleware/friendslist")
	}
	return friendService;
	
})
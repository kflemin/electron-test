pat.factory('BCL', [ '$http', function($http) {
	var obj = {};
    
  obj.download = function(the_uids){ 
    return $http.get('http://bcl7.development.nrel.gov/api/component/download/', { params: { uids: the_uids }, responseType: 'arraybuffer'});
  }

 return obj;

}]);


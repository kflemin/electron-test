pat.controller('BaseCtrl', ['$scope', '$log', 'toastr', 'diskIO', 'BCL', function ($scope, $log, toastr, diskIO, BCL) {

  $scope.readIO = diskIO.readFile('project.json');
  $scope.writeIO = diskIO.writeFile('test.txt', 'this is some data');



  // make a system call
  var exec = require('child_process').exec;
  
	var child = exec('echo I just made a system call!',
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    $scope.stdout =  stdout;
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	});

	// download from BCL
	var test_uid = 'dbcf7b67-274b-4bc0-9153-e4c3e2885aa1';
  var toBuffer = require('typedarray-to-buffer');

	BCL.download(test_uid)
    .then(function(response) {            
      console.log("SUCCESS");
  		console.log(response);
    	diskIO.writeBinaryFile('data/bcl_components/test_component.zip', response.data);
    	$scope.download = 'BCL component was downloaded!';
     },
     function() {
       console.log('BCL download failed!');
     }
    );

}]);



pat.factory('diskIO', function(){
	var diskIO = {};
	var jetpack = require('fs-jetpack'); 
  var toBuffer = require('typedarray-to-buffer');
  //var fs = require('fs'); //for binary streams

  // directory for I/O
	var directory = jetpack.cwd('data');

	diskIO.readFile = function(file_path, return_as) {
    var data;
		if (typeof return_as === 'undefined') 
		  data = directory.read(file_path, return_as);
		else
			data = directory.read(file_path);
		return data;
	};

	diskIO.writeFile = function(file_path, data) {
		directory.write(file_path, data);
	  return 'file written';
	};

	diskIO.writeBinaryFile = function(file_path, data) {
   jetpack.write(file_path, toBuffer(data));
	}
	return diskIO;

});
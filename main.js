var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
	});
var fs=require('fs');
function writeFile(str,file){
	fs.appendFile(file,str, function(err){  
        if(err)  
            console.log("fail " + err);  
        else  
            console.log("写入文件ok");  
    });  

}
function menu(){
	rl.on('line',function(line){
    var arr=line.toString().split(' ');

    switch(arr[0]){
		case 'create':{
			var value="";
			for(var i=2;i<arr.length;i++){
				
				 value=value+arr[i];
				value=value+";";
			}
			;	
			writeFile(value,'aa.txt');
			break;
		}
		case 'insert':{
			var value="";
			for(var i=2;i<arr.length;i++){
				
				var value  =value+arr[i];
				value=value+";";
			}
				
			writeFile(value,'bb.txt');
			break;
		}
		case 'select':{
			var proprty=arr[1];
			var blog=arr[3];
			console.log(proprty+"+"+blog);
		function readFile(file){  
    		fs.readFile(file,"utf-8", function(err, data){  
	        if(err)  
	            console.log("读取文件fail " + err);  
	        else{  
	            // 读取成功时  
	            // 输出字节数组  
	            console.log(data);  
	            
	        }  
	    });  
		} 
		 readFile('bb.txt');
		}
		


		
	}
	});

}
menu();


  


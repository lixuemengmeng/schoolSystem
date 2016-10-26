var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
	});
var fs=require('fs');
function writefile(str,file){
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
				
			writefile(value,arr[2]+'.txt');
			break;
		}
		case 'insert':{
			var value="";
			for(var i=3;i<arr.length;i++){
				
				var value  =value+arr[i];
				value=value+";";
			}
				
			writefile(value,arr[2]+'1.txt');
			break;
		}
		case 'select':{//select age 10 from li
			var proprty=arr[1];
			var value=arr[2];
			var blog=arr[arr.length-1];
			console.log(proprty+"+"+blog);
		function readFile1(file){  
    		fs.readFile(file,"utf-8", function(err, data){  
	        if(err)  
	            console.log("读取文件fail " + err);  
	        else{
	             var arrList=data.split(';');
	           
	            if(proprty=='name') {
	            	
	            	for(var i=0;i<arrList.length;i+=2){
	            		
	            		if(arrList[i]==value){
	            			
	            			console.log("姓名为："+arrList[i] +"学号为"+arrList[i+1]);
	            			
	            		}
	            	}
	            } 
	            else if(proprty=='xuehao'){
	            	for(var i=1;i<arrList.length;i+=2){
	            		if(arrList[i]==value){
	            			console.log("姓名为："+arrList[i-1] +"学号为："+arrList[i]);
	            		}
	            	}
	            }
	           
	            
	        }  
	    });  
		} 
		 readFile1(blog+'1.txt');
		 break;
		}
		case 'update':{// update name li to 20 from lixuemeng
			console.log(11);
			var proprty=arr[1];
			var value=arr[2];
			var blog=arr[arr.length-1];
			var newname=arr[4];
			console.log(2);
		function readFile2(file){  
    		fs.readFile(file,"utf-8", function(err, data){  
	        if(err)  
	            console.log("读取文件fail " + err);  
	        else{  
	            // 读取成功时  
	            // 输出字节数组  
	           
	             var arrList=data.split(';');
	      			console.log(111);
	            if(proprty=='name') {
	            	
	            	for(var i=0;i<arrList.length;i+=2){
	            		
	            		if(arrList[i]==value){
	            			console.log(222);
	            			arrList[i]=newname;
	            			console.log(arrList);
	            			var str="";
	            			for(var i=0;i<arrList.length;i++){
	            				str=str+arrList[i] +";";
	            			}
			           fs.writeFile(blog+'1.txt',str,function(err, fd) {
					               if(err)  
					            console.log("fail " + err);  
					            else  
					            console.log("写入文件ok");  
    						});
	            			
	            		}else{
	            			
	            	}
	            		}
	            } 
	            else if(proprty=='xuehao'){
	            	for(var i=1;i<arrList.length;i+=2){
	            		if(arrList[i]==value){
	            			console.log(2);
	            		}else{
	                 		}
	            	}
	            }
	           
	            
	        }  
	    });  
		} 
		 readFile2(blog+'1.txt');
		 break;
		}

		case 'delete':{// delete name lixuemeng from li
			console.log(11);
			var proprty=arr[1];
			var value=arr[2];
			var blog=arr[arr.length-1];
			console.log(proprty+"+"+blog);
		function readFile3(file){ 
    		fs.readFile(file,"utf-8", function(err, data){  
	        if(err)  
	            console.log("读取文件fail " + err);  
	        else{  
	            // 读取成功时  
	            // 输出字节数组  
	           
	             var arrList=data.split(';');
	      			
	            if(proprty=='name') {
	            	
	            	for(var i=0;i<arrList.length;i+=2){
	            		
	            		if(arrList[i]==value){
	            			console.log(111);
	            			var arrnew=arrList.splice(i,2);
	            			console.log("已删除："+arrnew);
	            			console.log(arrList);
	            			var str="";
	            			for(var i=0;i<arrList.length;i++){
	            				str=str+arrList[i] +";";
	            			}
			           fs.writeFile(blog+'1.txt',str,function(err, fd) {
					               if(err)  
					            console.log("fail " + err);  
					            else  
					            console.log("写入文件ok");  
    						});
	            			
	            		}
	            		}
	            } 

	            else if(proprty=='xuehao'){
	            	for(var i=1;i<arrList.length;i+=2){
	            		if(arrList[i]==value){
	            			console.log(111);
	            			var arrnew=arrList.splice(i-1,2);
	            			console.log("已删除："+arrnew);
	            			console.log(arrList);
	            			var str="";
	            			for(var i=0;i<arrList.length;i++){
	            				str=str+arrList[i] +";";
	            			}
			           fs.writeFile(blog+'1.txt',str,function(err, fd) {
					               if(err)  
					            console.log("fail " + err);  
					            else  
					            console.log("写入文件ok");  
    						});
	            		}
	            	}
	            }
	           
	            
	        }  
	    });  
		} 
		 readFile3(blog+'1.txt');
		 break;
		}
		
		case 'deleteIndex' :{//deleteIndex li
			var blog=arr[1];
			fs.writeFile(blog+'index.txt','',function(err, fd) {
					               if(err)  
					            console.log("fail " + err);  
					            else  
					            console.log("删除索引成功");  
    						});

			break;
		}
		case 'build':{//build index to li
			var blog=arr[3];
			var arrIndex=[];
			var arrRow=[];
			var arr=[];
			var arrNew=[];
			//console.log(111);
			 var str="";
			function readFile4(file){
				fs.readFile(file,"utf-8", function(err, data){
				if(err)   
	            console.log("读取文件fail " + err);  
	        else{

	             var arrList=data.split(';');
	             var arrs=[];
	        	  //console.log(arrList);
			   function insertSort(arr1,arr2){
		            var len = arr1.length;
		             for (var i = 1; i < len; i+=2) {
		              var key= arr1[i];
		              var key2=arr2[i];
		             var j = i - 2;
		              while (j >= 0 && arr1[j] > key) {
		                  arr1[j + 2] = arr1[j];
		                  arr2[j + 2] = arr2[j];
		                  j-=2;
		              }
		             arr1[j + 2] = key;
		             arr2[j + 2] = key2;
		         }
		         arrs=[arr1,arr2];
		        return arrs;

		      
				}		

				
	        	  for(var i=1;i<arrList.length;i+=2){
	        	  	var intxuehao=parseInt(arrList[i]);
	        	  	
	        	  	arrIndex[i]=intxuehao;
	        	  	arrRow[i]=parseInt(i/2);

	        	 
	        	    }
	        	   
	        		      arrNew=insertSort(arrIndex,arrRow);
	        		     var arrIndexNew=arrNew[0];
	        		     var arrRowNew=arrNew[1];
	        		   
        		 for(var i=1;i<arrList.length;i+=2){
	        	  	
	        	  	str=str+arrRowNew[i] +";"+arrIndexNew[i]+";";
	        	  
	        	    } 
	        	    console.log(str);    
	        	    fs.writeFile(blog+'index.txt',str,function(err, fd) {
					               if(err)  
					            console.log("fail " + err);  
					            else  
					            console.log("写入索引文件ok");  
    						});
	        	 

	        	}

			});
			}
			readFile4(blog+'1.txt');
			break;
			}
			

		
		
	}
	});

}
menu();


  


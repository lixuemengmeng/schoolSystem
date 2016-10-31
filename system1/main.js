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

var quanxian;
		
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
		case 'insert':{//insert to li haha 1111
			var name=arr[3];
			var xuehao=arr[4];
			if(quanxian==1){
				console.log("权限不够");
			}
			var reg=/^[\u4E00-\u9FA5]+$/;
			if(reg.test(xuehao)){//是中文
				console.log('数据项格式不正确');
				return;
			}else{
				var value="";
				for(var i=3;i<arr.length;i++){
					
				var value  =value+arr[i];
				value=value+";";
			}
				
			writefile(value,arr[2]+'1.txt');
			break;
			}
			
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
		case 'select2':{//select2 course from student course where xuehao = 2443  select2 course from student course where name = lixuemeng
		
			var arrList=[];
			var blog1=arr[3];
			var blog2=arr[4];
			var prop=arr[6];
			var signal=arr[7];
			var val=arr[8];
			fs.readFile(blog1+'.txt',"utf-8", function(err, data){  
		        if(err)  
		            console.log("读取文件fail " + err);  
		        else{
		        	fs.readFile(blog2+'.txt',"utf-8", function(err, data1){
	        		 if(err)  
		            console.log("读取文件fail " + err);
		            else{
		             var student=data.split('\n');
		             var course=data1.split('\n');
		           
					var cs=[];
					for(var i=0;i<student.length;i++){
						for(var j=0;j<course.length;j++){
							cs[i*course.length+j]=student[i]+" "+course[j];
						}
					}
					
					var newcs=[];
					for(var i=0;i<cs.length;i++){
						newcs=cs[i].split(' ');
						// console.log(newcs);
						if(newcs[1]==newcs[2]){
							// console.log(newcs);
							if(prop=='xuehao'){
								if(signal=='='){
									if(val==newcs[1]){
										console.log(newcs[3]);
										}
									}
									else if(signal=='>'){
									if(val < newcs[1]){
										console.log(newcs[3]);
										}
									}
									else if(signal=='<'){
									if(val > newcs[1]){
										console.log(newcs[3]);
										}
									}
							} else if(prop =='name'){
								if(signal =='='){
								if(val ==newcs[0]){
									console.log(newcs[3]);
									}
								}

							}

							
						}else{
							continue;
						}
					}
					
					
		           
		            } 
		        	});
		     
		            }
            
	          
	    }); 

		
		
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
	case 'login':{//login lixuemeng pass 2443 login feng pass 4025

			var name=arr[1];
			var pass=arr[3];

			
			function readFile6(file){ 
				fs.readFile(file,"utf-8", function(err, data){  
	         if(err)  
	            console.log("读取文件fail " + err);  
	        else{
	        	
	        	var arrList=data.split(';');
	        	var names=[];
	        	var passes=[];
	        	var quan =[];

	        	
	        	for(var i=0;i<arrList.length;i+=3){
	        		names[i]=arrList[i];
	        	}
	        	for(var i=1;i<arrList.length;i+=3){
	        		passes[i]=arrList[i];
	        	}
	        	for(var i=2;i<arrList.length;i+=3){
	        		quan[i]=arrList[i];
	        	}
	        	
	        	for(var i=0;i<names.length;i+=3){
	        		if(names[i]==name){
						if(passes[i+1]==pass){
	        				console.log("登录成功");
	        				quanxian=quan[i+2];
	        				console.log(quanxian);
	        			return;
	        			}
	        			
	        		} 
	        	}
	        	console.log('用户名或密码不存在');


	        }

			});
			
		}
		readFile6("login.txt");
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


  


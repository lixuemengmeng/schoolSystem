var Fun=require('./fn.js');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
	});
//exports.rl = rl;
var Fun=new Fun();
function exit(){
	console.log('退出成功');
	display();
}
function display(){
  //mainfct.createPcb();

  console.log("--------------欢迎-----------");
  console.log("请输入相应字符来执行相应应用");
  console.log("n--------创建进程");
  console.log("c--------调度进程");
  console.log("b--------堵塞进程");
  console.log("a--------激活进程");
  console.log("t--------时间片用完进程");
  console.log("e--------退出");

}
function menu(){
	display();
	rl.on('line',function(line){
    var arr=line.toString().split(' ');

    switch(arr[0]){
		case 'n':{
		
		Fun.createQpcb(arr[1]);
		console.log(Fun.view());
		break;
		}
		case 'c':{
			Fun.processCtr();
			console.log(Fun.view());
			break;
		}
		case 'b':{
			Fun.blockCtr();
			console.log(Fun.view());
			break;
		}
		case 'a':{
			Fun.active();
			console.log(Fun.view());
			break;

		}
		case 't':{
			Fun.timeOut();
			console.log(Fun.view());
			break;
		}
		case 'e':{
			Fun.clear();
			exit();
			break;

		}
		
	}
	});

}
menu();








var Qpcb=require('./queue.js');
//var QPcb=new Qpcb();
var ready=new Qpcb();
var run =new Qpcb();
var block =new Qpcb();
var proessNum=0;//进程大小
var memoryNum=0;//内存大小
var weishi=new Array();//0的下标数组 块号
var proess=new Array();//进程数组
var resultpage=new Array();//页表数组
var postionblock=new Array();//位示图数组

function Fun(){


}
Fun.prototype={
	//创建进程
	createQpcb:function(now){
		var thisQpcb=ready.inQpcb(now);
		//proessNum=thisQpcb.size;//进程大小
	},
	getNum:function(num){
		proessNum=num;
	},
	displace:function(blockNum,pageBunch,method){
		console.log(method);
			if(method=='1'){
				function fifomethod(blockNum,pageBunch){
					var blockarr=new Array(blockNum);
					console.log(pageBunch);

				}
				fifomethod(blockNum,pageBunch);
			}
	},
	
	//位示图输入内存的大小，并产生由1,0组成的一维数组
	memoryPosition:function(memorysize){
		
		//console.log(size);
		memoryNum=memorysize;
		
		for(var i=0;i<memoryNum;i++){
			var random=parseInt(2*Math.random());
			postionblock[i]=random;
			if(postionblock[i]===0){//将位示图中为零的元素生成一个数组
				weishi[i]=i;
			}
		}
		console.log('位示图为');
			console.log(postionblock);
		

	},
	getPage:function(){
		//进程数组 页号
		 for(var i=0;i<proessNum;i++){
		 	proess[i]=i;
		 }
		 //块号 将数组中空的去掉 
		 for(var i=0;i<weishi.length;i++){
		 	if(weishi[i]==''||typeof(weishi[i])=="undefined"){
		 		weishi.splice(i,1);
		 		i=i-1;
		 	}
		 }
		 
		//找到进程和块号长度的最小值 
		 var litter=(weishi.length<proess.length)?weishi.length:proess.length;
		 	 for(var i=0;i<litter;i++){
			resultpage.push([proess[i],weishi[i]]);//生成页表
			var index=weishi[i];//将位示图中放进程的地方改为1
		 	postionblock.splice(index,1,1);
		 }
		
		 console.log('位示图为');
			console.log(postionblock);
		 console.log('页表为');
		console.log(resultpage);
	},
	changeNum:function(num){
		var pagesize=5;//定义页面大小
		var pagestr=num.substring(0,2);
		var pagenum=parseInt(pagestr,2);//将2进制的转换为十进制
		var chunckstr=num.substring(2);
		var chuncknum=parseInt(chunckstr,2);
		var phyAdress=pagenum*pagesize+chuncknum;
		console.log('页号大小为');
		console.log(pagenum);
		console.log('偏移量为');
		console.log(chuncknum);
		console.log('物理地址为');
		console.log(phyAdress);
		
	},
	//进程调度 从就绪到执行
	processCtr:function(){
		if(ready.front){
		var head=ready.detQpcb();
		 var thisrun=run.inQpcb(head);
		}else{
			console.log('就绪队列为空 无法进行操作');
			return null;
		}
		
		 


	},
	//堵塞进程 从执行到阻塞
	blockCtr:function(){
		if(run.front){
		var head=run.detQpcb();
		block.inQpcb(head);
		}else{
			console.log('执行队列为空 无法进行操作');
			return null;
		}
		
	},
	//激活进程 从阻塞到就绪
	active:function(){
		if(block.front){
			var head=block.detQpcb();
			ready.inQpcb(head);

		}else{
			console.log('阻塞队列为空 无法进行操作');
			return null;
		}
	},
	//时间片用完 从执行到就绪
	timeOut:function(){
		if(run.front){
			var head=run.detQpcb();
			ready.inQpcb(head);
		}else{
			console.log('执行队列为空 无法进行操作');
			return null;
		}
	},
	clear:function(){
		ready.clear();
		run.clear();
		block.clear();
	},
	view:function(){
		 return '就绪队列为'+ready.displayAll()+'执行队列为'+run.displayAll()+'阻塞队列为'+block.displayAll();
		
	}
}
module.exports=Fun;
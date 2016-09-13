var Qpcb=require('./queue.js');
//var QPcb=new Qpcb();
var ready=new Qpcb();
var run =new Qpcb();
var block =new Qpcb();

function Fun(){


}
Fun.prototype={
	//创建进程
	createQpcb:function(now){
		var thisQpcb=ready.inQpcb(now);
		
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
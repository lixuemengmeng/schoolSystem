//定义pcb
function Qpcb(){
	this.front=this.rear=null;
	this.size=0;
}
//原生链
Qpcb.prototype={
	//入队尾
	inQpcb:function(elem){
		

		if(this.front==null){
			this.front=this.rear={data:elem,next:null};
		}else{
			var p={data:elem,next:null};
			this.rear.next=p;
			this.rear=p;

		}
		this.size++;
		return this;
	},
	//删除队头
	detQpcb:function(){
		if(this.front==null){
			return null;
		}else{
			var elem=this.front.data;
			this.front=this.front.next;
			this.size--;
			return elem;
		}
	},
	clear:function(){
		this.front=this.rear=null;
	this.size=0;
},





//展示队列
	displayAll:function(){
		if(this.front==null){
			return null;
		}
		else{
			var arr=[];
			var current=this.front;
			for(var i=0,len=this.size;i<len;i++){
				arr[i]=current.data;
				current=current.next;
			}
			return arr;
		}
	},

	
}


module.exports=Qpcb;
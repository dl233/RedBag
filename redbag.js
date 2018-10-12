//红包抽取模块
//num是抽取得人数，total是金额，抽取最少每人一分钱，total不足以满足每人一分钱或者传递得参数不是Number类型得返回“ERROR”
//注意传入的时候转换数据类型，total要传入浮点数，num则是整型
function redbag(num,total){
	if(total<num*0.01||typeof(num)!="number"||typeof(total)!="number"||num<=0||total<=0||isNaN(num)||isNaN(total)){
		console.log(num+" "+typeof(num))
		console.log(total+" "+typeof(total))
		console.log("ERROR!")
		return "ERROR"
	}	
	var arr=new Array()
	var money=total
	var temp
	for(var i=0;i<num;i++){
		if(i!=num-1){
		temp=(Math.random()*(money-(num-i)*0.01)+0.01).toFixed(2)
		arr.push(temp)
		money-=temp
		}else{
			arr.push(money.toFixed(2))
		}
	}
	function randomsort(a, b) {
    return Math.random()>0.5 ? -1 : 1
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
	}
	arr.sort(randomsort)//打乱数组
	return arr
}
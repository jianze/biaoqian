var lie=[
	{
		id:1,
		lieming:"新列表1",
		color:"#FF2A6B",
		nei:[
			{
				rong:"数据1",
				zt:false
			},{
				rong:"数据2",
				zt:true
			},{
				rong:"数据3",
				zt:false
			},{
				rong:"数据4",
				zt:true
			}
		]
	},{
		id:2,
		lieming:"新列表2",
		color:"#F7CC00",
		nei:[
			{
				rong:"内容1",
				zt:false
			},{
				rong:"内容2",
				zt:true
			},{
				rong:"内容3",
				zt:false
			},{
				rong:"内容4",
				zt:true
			}
		]
	},{
		id:3,
		lieming:"新列表3",
		color:"#1AAAF8",
		nei:[
			{
				rong:"标题1",
				zt:false
			},{
				rong:"标题2",
				zt:true
			},{
				rong:"标题3",
				zt:true
			},{
				rong:"标题4",
				zt:true
			}
		]
	}
]
var colors=["#C970E3","#6EDC31","#41ABF8","F3CC00","#9F845D","#F82469","#F89600"]
var aa=angular.module("app",[]);
aa.controller('aa',function($scope){
	$scope.lie=lie;
	$scope.colors=colors;
	$scope.index=0;
	$scope.changetitle=0;
	$scope.xuan=function(i){
		$scope.index=i;
	}
	// 添加
	$scope.tian=function(){
		var id=$scope.lie[$scope.lie.length-1].id+1;
		$scope.lie.push({
			id:id,
			lieming:"新列表"+id,
			color:$scope.colors[(id-1)%7],
			nei:[]
		});
		$scope.index=id-1;
	}
	$scope.xia=function(i,j){
		j[i].zt=false;
	}
	$scope.shang=function(i,j){
		j[i].zt=true;
	}
	// 新项目
	$scope.xiangmu=function(){
		$scope.lie[$scope.index?$scope.index:0].nei.push({
			rong:'',
			zt:false
		})
	}
	// 编辑
	$scope.bianji=function(ev,v){
		v.rong=ev.target.innerHTML;
	}
	$scope.choseflag=true;
	$scope.setshow=function(){
		$scope.changetitle=$scope.lie[$scope.index?$scope.index:0].lieming;
		$scope.choseflag=!$scope.choseflag;
		$scope.colorss=$scope.lie[$scope.index?$scope.index:0].color;

	};
	$scope.com=function(){
		$scope.lie[$scope.index?$scope.index:0].lieming=$scope.changetitle;
		$scope.choseflag=!$scope.choseflag;
		$scope.lie[$scope.index?$scope.index:0].color=$scope.colorss;
	};
	$scope.changecolor=function(v){
		$scope.colorss=v;
	}
	$scope.del=function(){
		$scope.lie.splice($scope.index,1);
		$scope.index=0;
		$scope.choseflag=!$scope.choseflag;
	}
	// 删除
	// $scope.shanchu=function(v){
	// 	v.splice(0,1);
	// }
})
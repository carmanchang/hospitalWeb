$(function(){
	var arcData = {
		fir:{
			data:[{
				left:'85px',
				text:'预防医学部'
			},
			{
				left:'455px',
				text:'中心处'
			},{
				left:'545px',
				text:'预防医学部'
			},{
				left:'637px',
				text:'预防医学部'
			},{
				left:'726px',
				text:'预防医学部'
			},{
				left:'900px',
				text:'预防医学部'
			},{
				left:'985px',
				text:'预防医学部'
			},{
				left:'1078px',
				text:'预防医学部'
			},{
				left:'1173px',
				text:'预防医学部'
			}]
		},
		sec:{
			data:[
				{
					left:'378px',
					text:'预防医学部'
				},{
					left:'440px',
					text:'预防医学部'
				},{
					left:'500px',
					text:'预防医学部'
				},{
					left:'558px',
					text:'预防医学部'
				},{
					left:'618px',
					text:'预防医学部'
				},{
					left:'678px',
					text:'预防医学部'
				},{
					left:'740px',
					text:'预防医学部'
				},{
					left:'970px',
					text:'预防医学部'
				},{
					left:'1030px',
					text:'预防医学部'
				},{
					left:'1090px',
					text:'预防医学部'
				},{
					left:'1148px',
					text:'预防医学部'
				},{
					left:'1207px',
					text:'预防医学部'
				},{
					left:'1510px',
					text:'预防医学部'
				},{
					left:'1570px',
					text:'预防医学部'
				}
			]
		},
		third:{
			data:[
				{
					left:'0px',
					text:'预防医学部'
				},{
					left:'46px',
					text:'预防医学部'
				},{
					left:'94px',
					text:'体细胞治疗与保健中心'
				},{
					left:'140px',
					text:'预防医学部'
				},{
					left:'186px',
					text:'预防医学部'
				},{
					left:'235px',
					text:'预防医学部'
				},{
					left:'288px',
					text:'预防医学部'
				},{
					left:'339px',
					text:'预防医学部'
				},{
					left:'385px',
					text:'预防医学部'
				},{
					left:'430px',
					text:'预防医学部'
				},{
					left:'477px',
					text:'预防医学部'
				},{
					left:'525px',
					text:'预防医学部'
				},{
					left:'575px',
					text:'预防医学部'
				},{
					left:'622px',
					text:'预防医学部'
				},{
					left:'672px',
					text:'预防医学部'
				},{
					left:'720px',
					text:'预防医学部'
				},{
					left:'766px',
					text:'预防医学部'
				},{
					left:'823px',
					text:'预防医学部'
				},{
					left:'868px',
					text:'预防医学部'
				},{
					left:'917px',
					text:'预防医学部'
				},{
					left:'963px',
					text:'预防医学部'
				},{
					left:'1010px',
					text:'预防医学部'
				},{
					left:'1058px',
					text:'预防医学部'
				},{
					left:'1110px',
					text:'预防医学部'
				},{
					left:'1160px',
					text:'预防医学部'
				},{
					left:'1207px',
					text:'预防医学部'
				},{
					left:'1255px',
					text:'预防医学部'
				},{
					left:'1302px',
					text:'预防医学部'
				},{
					left:'1352px',
					text:'预防医学部'
				},{
					left:'1400px',
					text:'预防医学部'
				},{
					left:'1447px',
					text:'预防医学部'
				},{
					left:'1495px',
					text:'预防医学部'
				},{
					left:'1540px',
					text:'预防医学部'
				},{
					left:'1588px',
					text:'预防医学部'
				},{
					left:'1640px',
					text:'预防医学部'
				}
			]
		}
	};
	
	var str = '';
	_.each(arcData,function(item,pro){
		if(pro === 'fir'){
			var rendItem = '<div class="depItemCommon firDepList" style="left:<%=left%>;"><%=text%></div>';
			_.each(item.data,function(curDataItem){
				str += _.template(rendItem)(curDataItem);
			});
		}else if(pro === 'sec'){
			var rendItem = '<div class="depItemCommon secDepList" style="left:<%=left%>;"><%=text%></div>';
			_.each(item.data,function(curDataItem){
				str += _.template(rendItem)(curDataItem);
			});
		}else if(pro === 'third'){
			var rendItem = '<div class="depItemCommon thirdDepList" style="left:<%=left%>;"><%=text%></div>';
			_.each(item.data,function(curDataItem){
				str += _.template(rendItem)(curDataItem);
			});
		}
	});
	$('div.treeArc:first').html(str);
});
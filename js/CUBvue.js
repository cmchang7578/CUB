window.onload = function(){

	var app = new Vue({
		el : "#app" ,
		data:  {
				
			orders: [
				{
					name: 'Livi優活 抽取式衛生紙(100抽x10包x10串/箱)',
					logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
					status: {
					  code: 3,
					  type: '已取消'
					},
					date: '107/6/12'
				},
				{
					name: 'BALMUDA The Toaster 百慕達烤麵包機-黑色',
					logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
					status: {
					  code: 2,
					  type: '已成立'
					},
					date: '108/7/21'
				},
				{
					name: '贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...',
					logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
					status: {
					  code: 1,
					  type: '處理中'
					},
					date: '108/6/2'
				 },
				 {
					name: 'Apple AirPds 2',
					logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
					status: {
					  code: 4,
					  type: '已送達'
					},
					date: '108/3/02'
				}
			],
			
			svg : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="28px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#929292" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="12.575,0.575 45.63,38.087 12.575,76.0 "/></svg>',
		},
		
		computed:{
			dataTransfer: function(data){
				var dataTemp = data['orders'];

				//日期格式處理					
				for(var i=0 ; i < dataTemp.length; i++){
					var dateSplit = dataTemp[i].date.split('/');		
					var year = dateSplit[0];
					var month = dateSplit[1];
					var day = dateSplit[2];
					if(month.length == 1){
						month = "0" +month;
					}
					if(day.length == 1){
						day = "0" +day;
					}
					dataTemp[i].date = year +'/'+ month +'/'+ day;

				}
				//日期排序
				dataTemp = dataTemp.sort(function(a, b){
					return a.date < b.date ? 1 : -1;
				});
				
				return dataTemp;
			}
		}
	});
};
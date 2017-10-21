(function(){
	var gems = [
		{
			name:"diamente",
			price:"1000.00",
			description:"pedra foda",
			canPurchase:false,
			soldOut:true,
		},	{
			name:"esmeralda",
			price:"5000000.00",
			description:"pedra foda2",
			canPurchase:true,
			soldOut:false,
		},	
	]
	var app = angular.module('store',[]);
	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(valueTab){
			this.tab = valueTab;
		};

		this.isSelected = function(valueTab){
			return this.tab === valueTab;
		};
	});

})();
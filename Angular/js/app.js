(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.reviews = {};

		this.addReview = function(products) {
			products.reviews.push(this.review);
			this.reviews = {};
		};
	});

	var gems = [
		{ 	
			name: 'Dodecahedron', 
			price: 2, 
			description: '12 sides', 
			canPurchase: true, 
			images: [
				{
					full: 'img/dog1.jpg',
					thumb: 'img/dog2.jpg'
				}
			],
			reviews: [
			{
				stars: 5,
				body: "Dodecca mah nigga",
				author: "Gucci@mayne.internet"
			}]
		},
		{ 
			name: 'Pentagonal Gem', 
			price: 5.95, 
			description: '5 sides', 
			canPurchase: false, 
			images: [
				{
					full: 'img/dog3.jpg',
					thumb: 'img/dog4.jpg'
				}
			],
			reviews: [
			{
				stars: 5,
				body: "5 AH AH AH",
				author: "the_count@sesame.street"
			}]
		}
	];
})();
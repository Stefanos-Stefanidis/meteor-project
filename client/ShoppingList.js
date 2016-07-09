/*display all the recipes withn in menu true*/
Template.ShoppingList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});

Template.ShoppingList.helpers({
	shoppingList: ()=> {
		
		return Recipes.find({inMenu:true});
	}
});
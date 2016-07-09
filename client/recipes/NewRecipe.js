Template.NewRecipe.events({
	'click .fa-close': function() {
		Session.set('new-recipe',false);
	}
});
Recipes = new Mongo.Collection('recipes');

/* */
Recipes.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId,doc){
		return !!userId;
	}
});

/* ingredience schema*/

Ingredient = new SimpleSchema({
	name:{
		type: String
	},
	amount:{
		type: String
	}
});



/*create the schema*/
RecipeSchema = new SimpleSchema({
	name: {
			type: String,
			label: "Name"
	},
	desc:{
			type: String,
			label: "Description"
		},
	ingridience:{
		/*pass the schemma in the object
		* we put it in an array [] so we can add more
		*/
		type:[Ingredient]
	},

	inMenu:{
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform:{
			type: "hidden"
		}
	},

	author:{
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform:{
			type: "hidden"
		}

	},
	createdAt: {
		type: Date,
		label: "created at",
		autoValue: function() {
			return new Date()
		},
		autoform:{
			type: "hidden"
		}

	}
});


Meteor.methods({
	toggleMenuItem: function(id, currentState){
		Recipes.update(id,{
			$set:{
				inMenu: !currentState
			}
		})
	},
	deleteRecipe: function(id){
		Recipes.remove(id);
	}
});

/*attache the schema in the collections*/

Recipes.attachSchema(RecipeSchema);


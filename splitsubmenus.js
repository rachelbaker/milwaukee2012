// Split Submenus (splitsubmenus.js)
// A jQuery plugin to split a WordPress submenu into side-by-side columns
// version 1.1, May 30, 2012
// by Rachel Baker
// http://www.rachelbaker.me
// Inspired by splitlist.js by Jack Franklin


(function($) {

	$.fn.splitSubmenus = function(newSubmenuClass) {
		// declaring default classes for the two submenu columns
	    var leftSubmenuClass = "left ";
		var rightSubmenuClass = "right ";
		//assign newSubmenuClass to be the passed in string or use "sub-menu" as the default
		var newSubmenuClass = newSubmenuClass || "sub-menu",
			Submenu = this,

			//create two new Submenus, with default classes added to any declared class
			leftNewSubmenu = $("<ul></ul>", {"class": leftSubmenuClass+newSubmenuClass}),
			rightNewSubmenu = $("<ul></ul>", {"class": rightSubmenuClass+newSubmenuClass}),
			SubmenuItems = Submenu.children("li"), //get the items that we need to split up
		 	SubmenuLength = SubmenuItems.size(), //get the number of items to split
			splitPoint = Math.ceil(SubmenuLength/2); //the split point is total/2 rounded up.

		//loop through each item in the Submenu
		SubmenuItems.each(function(i, item) {
			//if i < splitPoint, add the item to the first of the two new Submenus we created called leftNewSubmenu
			//else, add the item to the second of the new Submenus, called rightNewSubmenu
			//jQuery's append() method puts the item in as the last child of the element we invoke it on
			(i < splitPoint) ? leftNewSubmenu.append(item) : rightNewSubmenu.append(item);
		});
		//add the two new Submenus and then remove the old one
		Submenu.after(leftNewSubmenu).after(rightNewSubmenu).remove();
	}

})(jQuery);
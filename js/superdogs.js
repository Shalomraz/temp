/**
 * Ex. Handlebars Templates Engine
 *
 * Dependencies (loaded in this Pen):
 * - //cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.min.js
 *
 * Reuirements:
 * 1. Update the HTML to use a Handlebars template to generate each
 * Superstar Dog record, instead of raw HTML.
 * 2. Add the necessary JS code to make it work (use the `dogs` array)
 * 3. If there is no value for one of the items, display `---`
 * 
 * Hint:
 * - Build the template outside of `dogs` and insert the result into it
 *
 */

(function ($, Handlebars) {
	'use strict';

	var data = {
    dogs: [
      {
        name: 'Daisy',
        breed: 'Pekingese',
        gender: 'Female',
        color: 'Dirty Beige',
        birth: '11/09/2012'
      },
      {
        name: 'Lassie',
        breed: 'Collie',
        gender: 'Female/Male',
        color: 'Sable',
        birth: '04/06/1940'
      },
      {
        name: 'Frank',
        breed: 'Pug/Remoolian',
        gender: 'Male',
        color: 'White',
        birth: '08/03/1972'
      }
    ]
  };

	// Init Handlebars template
	(function () {

		// Your code here
    var source   = $("#dogs-template").html();
    var template = Handlebars.compile(source);
    var titleString = 'Super Dogs';
    var compiledHtml = template({data : data, title: titleString});    
    
    $('body').append(compiledHtml);
       
	}());

}(jQuery, Handlebars));

import { Component } from '@angular/core';

/*
When main index.html file imports this component by tag, 
render to the DOM the design of component.html 
*/

// '@Component is a decorator to the class 'AppComponent'
@Component({
	// Tag used in root index.html
	selector: 'app-root',

	/*
	The tag in index.html will render to the DOM
	This is like copy and paste
	*/

	templateUrl: './app.component.html',
	styleUrls:  ['./app.component.css']
})

/*
When exporting component templates to app.module.ts

The property variable's values below will replace the variables
in the template imported from app.component.html
*/
export class AppComponent {

}

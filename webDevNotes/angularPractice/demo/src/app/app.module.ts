import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Import the component typescript files
import { AppComponent } from './app.component';

// Because these are seen by app.module, they are seen across the entire project
import { ServerComponent }       from './server/server.component';
import { ServersComponent }      from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AssignmentComponent }   from './assignment/assignment.component';

// Modules bundle components
@NgModule({
	// Components registered in 'declarations' are known by the module
	declarations: [
		AppComponent,
		ServerComponent,
		ServersComponent,
		WarningAlertComponent,
		SuccessAlertComponent,
		AssignmentComponent
	],

	// Import modules to this module 
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],

	providers: [],

	/*
	Components that should be known to Angular on startup of HTML
	Usually only the 'AppComponent'. Other components will be accessed through the 'app.component.html'
	*/
	bootstrap: [
		AppComponent
	]
})

// It is feasible to have multiple modules for big applications
export class AppModule {

}

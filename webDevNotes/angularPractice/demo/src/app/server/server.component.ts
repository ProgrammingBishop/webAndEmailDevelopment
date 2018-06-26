import { Component } from '@angular/core';

@Component({
	selector:    'app-server',
	templateUrl: './server.component.html',
	styles:     [`
		.online {
			color: #ffffff;
		}
	`]
})

export class ServerComponent {
	// Properties are passed to .html
	serverId: number = 10;
	serverStatus: string = 'offline';

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
	}

	// Properties can also be functions
	getServerStatus() {
		return this.serverStatus;
	}

	// Dynamically change ngStyle using this function's background color 
	// to be conditioned on serverStatus value
	getColor() {
		return this.serverStatus === 'online' ? 'green' : 'red';
	}
}
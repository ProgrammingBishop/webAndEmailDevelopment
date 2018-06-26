import { Component, OnInit } from '@angular/core';

@Component({
  /*
  Although componenets should be selected as an element ('app-servers'), 
  the following also would work:
  
  Selector could delect by attribute instead of tag
  So in another file use <div app-server></div> 

  Could also select by class, ie:
  <div class='app-server'></div>
  */
  selector:    'app-servers',
  templateUrl: './servers.component.html',
  /* 
  If HTML is short add the template right in the code:
  template: `<app-server></app-server>`,
  */
  styleUrls: ['./servers.component.css']
  /*
  Can add styles within component as well.
  Only use if minimal code and another file in unnecessary.
  styles: [
    `h3 { color: #d1d3d4; }`
  ]
  */
})
export class ServersComponent implements OnInit {
  // Properties with component scope
  allowNewServer       = false;
  serverCreationStatus = 'No server created...';
  serverName           = 'Test Server';
  serverCreated        = false;
  servers              = ['Test Server 1', 'Test Server 2']

  // Executed at time component is called by Angular
  constructor() { 
    // () => ES6 syntax for function() {}
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000 );
  }

  ngOnInit() {
  }

  // Use 'on' when it is executed through an event
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  // parameter with type any
  onUpdateServerName(event: any) {
    // '(<HTMLInputElement>event.target)' notifies TypeScript that element will be of type HTML Input
    // event.target.value is a return from the event
    // Can view this with console.log on event to see many many other attributes
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
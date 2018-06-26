import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// NOTICE: 'AppModule' is imported
import { AppModule }   from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
 	enableProdMode();
}

// NOTICE: on start, pass 'AppModule' to method (to root HTML)
platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.log(err));

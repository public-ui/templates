import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { KoliBriModule } from '@public-ui/angular-v17';
import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { DEFAULT } from '@public-ui/themes';
import { AppComponent } from './components/app/component';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [BrowserModule, FormsModule, KoliBriModule],
})
export class AppModule {
	public constructor() {
		register(DEFAULT, defineCustomElements).catch(console.warn);
	}
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { AppComponent } from "./app.component";
import { GeolocatorComponent } from "./components/geolocator/geolocator.component";

import { createCustomElement } from "@angular/elements";
import { Ng4GeoautocompleteModule } from "ng4-geoautocomplete";

@NgModule({
  declarations: [AppComponent, GeolocatorComponent],
  imports: [BrowserModule, Ng4GeoautocompleteModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // public constructor(private injector: Injector) {}
  // ngDoBootstrap() {
  //   const el = createCustomElement(GeolocatorComponent, {
  //     injector: this.injector
  //   });
  //   customElements.define("app-geolocator", el);
  // }
}

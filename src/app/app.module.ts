import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GeolocatorComponent } from "./components/geolocator/geolocator.component";

import { Ng4GeoautocompleteModule } from "ng4-geoautocomplete";

@NgModule({
  declarations: [AppComponent, GeolocatorComponent],
  imports: [BrowserModule, Ng4GeoautocompleteModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

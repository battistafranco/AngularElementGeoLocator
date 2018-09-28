import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-geolocator",
  templateUrl: "./geolocator.component.html",
  styleUrls: ["./geolocator.component.css"]
})
export class GeolocatorComponent implements OnInit {
  public componentData1: any = "";
  public userSettings: any = {
    showCurrentLocation: false,
    inputPlaceholderText: "Nombre de localidad y pais..",
    recentStorageName: "componentData1"
  };

  constructor() {}

  getCodeHtml(data: any): any {
    let _temp: any = JSON.stringify(data);
    _temp = _temp.split(",").join(",<br>");
    _temp = _temp.split("{").join("{<br>");
    _temp = _temp.split("}").join("<br>}");
    return _temp;
  }

  autoCompleteCallback1(data: any): any {
    this.componentData1 = JSON.stringify(data);
  }

  ngOnInit() {}
}

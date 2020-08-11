import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../shared/data.service";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}

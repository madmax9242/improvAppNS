import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { StarWarsComponent } from "./star-wars.component";

const routes: Routes = [
    { path: "default", component: StarWarsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class StarWarsRoutingModule { }
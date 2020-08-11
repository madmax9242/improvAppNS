import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { StarWarsRoutingModule } from "./star-wars-routing.module";
import { StarWarsComponent } from "./star-wars.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        StarWarsRoutingModule
    ],
    declarations: [
        StarWarsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StarWarsModule { }
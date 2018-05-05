import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreService} from './core.service';
import {CardComponent} from './card/card.component';
import {FormModule} from './form/form.module';
import { ButtonComponent } from './button/button.component';
import { ButtonCircleComponent } from './button-circle/button-circle.component';

const COMPONENTS = [
    CardComponent,
    ButtonComponent,
    ButtonCircleComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        CoreService
    ],
    exports: [
        ...COMPONENTS,
        FormModule
    ]
})
export class CoreModule {
}

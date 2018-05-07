import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './users-list/users-list.component';
import {CoreModule} from '../../core/core.module';
import {UsersRoutingModule} from './users-routing.module';
import { UsersNewComponent } from './users-new/users-new.component';

const COMPONENTS = [
    UsersListComponent
];

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        UsersRoutingModule
    ],
    declarations: [
        ...COMPONENTS,
        UsersNewComponent
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class UsersModule {
}

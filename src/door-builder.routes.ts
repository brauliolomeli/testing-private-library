import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { SelectDoorComponent } from './select-door/select-door.component';

const DoorBuilderRoutes: Routes = [
   { path: 'select-door', component: SelectDoorComponent }
];
export const DoorBuilderRouting: ModuleWithProviders = RouterModule.forChild(DoorBuilderRoutes);

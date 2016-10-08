import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DoorBuilderRouting } from './door-builder.routes';
// Components
import { SelectDoorComponent } from './select-door/select-door.component';

@NgModule({
  declarations: [
    SelectDoorComponent
  ],
  exports: [
    SelectDoorComponent
  ],
  imports: [
    DoorBuilderRouting,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: []
})
export class DoorBuilderModule { }

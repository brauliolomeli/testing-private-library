import { DoorBuilderModule } from './door-builder.module';
import { SelectDoorComponent } from './select-door/select-door.component';

export * from './door-builder.module';
export * from './select-door/select-door.component';

export default {
  DoorBuilderModule : DoorBuilderModule,
  components: [
    SelectDoorComponent
  ]
};

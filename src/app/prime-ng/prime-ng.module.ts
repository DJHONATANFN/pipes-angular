import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],

  exports: [
    MenubarModule,
    PanelModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ],
})
export class PrimeNgModule { }

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';

// Configuracion de locale en la app
import localeESPE  from '@angular/common/locales/es-PE';
import localeFRCA  from '@angular/common/locales/fr-CA';
import { registerLocaleData }  from '@angular/common';

registerLocaleData(localeESPE);
registerLocaleData(localeFRCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es-PE' // CONFIGURACION DEL IDIOMA POR DEFECTO PARA LAS FECHAS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

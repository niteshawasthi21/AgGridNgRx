import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridAngular } from 'ag-grid-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DocumentEffects } from './ag-grid/ngrx-implement/document.effects';
import { documentReducer } from './ag-grid/ngrx-implement/document.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule,AgGridAngular,
    StoreModule.forRoot({ documents: documentReducer }), // Register the reducer
    EffectsModule.forRoot([DocumentEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

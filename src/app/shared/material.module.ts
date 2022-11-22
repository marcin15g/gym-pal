import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: []
})
export class MaterialModule { }

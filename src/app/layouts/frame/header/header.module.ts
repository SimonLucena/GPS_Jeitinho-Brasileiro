import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    
    
  ],
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CommonModule
  ], exports: []
})
export class HeaderModule { }
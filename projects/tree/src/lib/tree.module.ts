import { NgModule } from '@angular/core';
import { TreeComponent } from './tree.component';
import { STreeviewComponent } from './s-treeview/s-treeview.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TreeComponent,
    STreeviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    STreeviewComponent
  ]
})
export class TreeModule { }

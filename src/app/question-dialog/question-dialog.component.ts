import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-question-dialog',
  template: `
  <div mat-dialog-content>
  <p>{{data.question}}</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button [mat-dialog-close]="false">{{data.deny}}</button>
    <button mat-button cdkFocusInitial [mat-dialog-close]="true">{{data.confirm}}</button>
  </div>

  `,
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<QuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }
}

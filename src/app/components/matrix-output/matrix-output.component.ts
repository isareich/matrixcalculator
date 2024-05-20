import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matrix-output',
  templateUrl: './matrix-output.component.html',
  styleUrls: ['./matrix-output.component.scss'],
})
export class MatrixOutputComponent {
  @Input() initialMatrix: number[][] = [];
  @Input() transformedMatrix: number[][] = [];
}
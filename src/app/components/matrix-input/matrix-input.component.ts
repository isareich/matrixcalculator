import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-matrix-input',
  templateUrl: './matrix-input.component.html',
  styleUrls: ['./matrix-input.component.scss'],
})
export class MatrixInputComponent {
  @Output() matrixData = new EventEmitter<any>();
  
  matrixForm: FormGroup;
  matrix: number[][] = [];
  generatedMatrix: boolean = false;

  constructor(private fb: FormBuilder) {
    this.matrixForm = this.fb.group({
      rows: [null, [Validators.required, Validators.min(1), Validators.max(10)]],
      cols: [null, [Validators.required, Validators.min(1), Validators.max(10)]],
      generateRandom: [false],
      elements: this.fb.array([]),
    });
  }

  get elements() {
    return this.matrixForm.get('elements');
  }

  generateMatrix() {
    const rows = this.matrixForm.value.rows;
    const cols = this.matrixForm.value.cols;
    const generateRandom = this.matrixForm.value.generateRandom;
    this.matrix = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(generateRandom ? Math.floor(Math.random() * 100) - 50 : 0);
      }
      this.matrix.push(row);
    }
    this.generatedMatrix = generateRandom;

    this.matrixData.emit({ matrix: this.matrix });
  }

  onSubmit() {
    if (!this.generatedMatrix) {
      this.matrix = this.matrixForm.value.elements;
    }
    this.matrixData.emit({ matrix: this.matrix });
  }
}

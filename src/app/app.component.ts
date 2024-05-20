import { Component } from '@angular/core';
import { MatrixService } from './services/matrix.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  initialMatrix: number[][] = [];
  transformedMatrix: number[][] = [];
  negativeCount: number = 0;

  constructor(private matrixService: MatrixService) {}

  handleMatrixData(event: any) {
    this.initialMatrix = event.matrix;
    const result = this.matrixService.transformMatrix(this.initialMatrix, 1); // Задаємо своє значення k, я використаю 1
    this.transformedMatrix = result.transformedMatrix;
    this.negativeCount = result.negativeCount;
  }
}
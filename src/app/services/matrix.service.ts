import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  constructor() { }

  transformMatrix(matrix: number[][], k: number): { negativeCount: number, transformedMatrix: number[][] } {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const middleIndex = Math.floor(cols / 2);
    let negativeCount = 0;
    let transformedMatrix = JSON.parse(JSON.stringify(matrix));

    // Негативні елементи зліва
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < middleIndex; j++) {
        if (matrix[i][j] < k) {
          negativeCount++;
        }
      }
    }

    // Квадрати елементів справа
    for (let i = 0; i < rows; i++) {
      for (let j = middleIndex + 1; j < cols; j++) {
        if (i % 2 === 0 || j % 2 === 0) {
          transformedMatrix[i][j] = matrix[i][j] ** 2;
        }
      }
    }

    return { negativeCount, transformedMatrix };
  }
}
import { TestBed } from '@angular/core/testing';
import { MatrixService } from './matrix.service';

describe('MatrixService', () => {
  let service: MatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrixService);
  });

  it('Повинно підрахувати негативні елементи в лівій половині та перетворити праву половину', () => {
    const matrix = [
      [1, -2, 3, 4],
      [-5, 6, 7, -8],
      [9, -10, 11, 12],
      [-13, 14, 15, 16]
    ];
    const k = 0;
    const result = service.transformMatrix(matrix, k);

    expect(result.negativeCount).toBe(4);
    expect(result.transformedMatrix).toEqual([
      [1, -2, 3, 16],
      [-5, 6, 49, -8],
      [9, -10, 11, 144],
      [-13, 14, 15, 16]
    ]);
  });
});

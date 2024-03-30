import { Injectable } from '@angular/core';
import { ICoords } from '../game-box/game-box.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameBoxService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public updateHexagonGrid(radius: number = 3, coords: ICoords[] = []): Observable<Array<ICoords>> {
    return this.httpClient.post<Array<ICoords>>(
      `https://hex2048-lambda.octa.wtf/${encodeURIComponent(radius)}`,
      coords,
      {}
    );
  }
}









// import { Component, OnInit } from '@angular/core';
// import { fromEvent, tap } from 'rxjs';
// import { dataDecAxis, dataIncAxis, fixedAxis } from '../utils/data';
// import { GameBoxService } from '../services/game-box.service';

// export interface ICoords {
//   x: number;
//   y: number;
//   z: number;
//   value: number;
//   //[key: string]: number
// }

// enum ArrowDir {
//   DIR1 = 1,
//   DIR2 = 2,
//   DIR3 = 3,
//   DIR4 = 4,
//   DIR5 = 5,
//   DIR6 = 6,
// }

// @Component({
//   selector: 'app-game-box',
//   templateUrl: './game-box.component.html',
//   styleUrls: ['./game-box.component.scss']
// })
// export class GameBoxComponent implements OnInit {

//   private radius = 3;
//   private fixedAxis: Array<string> = fixedAxis;
//   private dataIncAxis: Array<string> = dataIncAxis;
//   private dataDecAxis: Array<string> = dataDecAxis;
//   private axisMaxValue = (this.radius - 1);
//   private axisMinValue = (0 - this.axisMaxValue);
//   public gridColCount = (2 * this.radius - 1);
//   private gridColRowsCount: number[] = [];
//   public mappedGroupArray: ICoords[][] = Array.from({length: this.gridColCount}, ()=>[]);
//   public hexagonWidth: number = (550/ this.gridColCount);
//   public hexagonHeight: number = (this.hexagonWidth * 0.5) * Math.sqrt(3);

//   public hexagonHorizShift: number = ((this.hexagonWidth + 4) * 0.25); // border - 16
//   public hexagonVertShift: number = (4 * 0.25); // border - 16

//   private xyz: ICoords[] = [
//     // {x: 0, y: -2, z: 2, value: 2},
//     // {x: 0, y: -1, z: 1, value: 2},
//     // {x: -1, y: 1, z: 0, value: 2},
//     // {x: -1, y: -1, z: 2, value: 2},
//     // {x: 2, y: -1, z: -1, value: 2},
//   ];

//   constructor(
//     private gameBoxService: GameBoxService,
//   ) {}

//   ngOnInit(): void {
//     this.initializeGame();
//     this.fetchHexagonData(this.radius, []);
//     this.watchKeyEvent();
//   }

//   private initializeGame() {
//     // Load initialise data to the xyz array;
//     let j = 0;
//     for (let i = this.axisMinValue; i <= this.axisMaxValue; i++) {
//       if (i <= 0) {
//         this.gridColRowsCount.push((this.radius + j));
//       } else {
//         const lastValue = this.gridColRowsCount[this.gridColRowsCount.length - 1];
//         this.gridColRowsCount.push((lastValue - 1));
//       }
//       j++;
//     }

//     let k = 0;
//     let initCoord = { x: this.axisMinValue, y: this.axisMaxValue };
//     for (let i = this.axisMinValue; i <= this.axisMaxValue; i++) {
//       if (i <= 0) {
//         initCoord = { ...initCoord,  x: this.axisMinValue + k };  
//       } else {
//         initCoord = { x: initCoord.x + 1,  y: initCoord.y - 1 };
//       }

//       for (let j = 0; j < this.gridColRowsCount[k]; j++) {
//         const itemCoord = {
//           x: initCoord.x,
//           y: initCoord.y - j,
//           z: (0 - initCoord.x - (initCoord.y - j)),
//           value: 0
//         };
//         this.mappedGroupArray[k].push({...itemCoord});
//       }
//       k++;
//     }
//   }

//   private watchKeyEvent() {
//     fromEvent(document, 'keydown').pipe(
//       tap((event: any) => {
//         switch(event.key) {
//           case 'w':
//             this.processGame(ArrowDir.DIR1);
//             break;
//           case 'e':
//             this.processGame(ArrowDir.DIR2);
//             break;
//           case 'd':
//             this.processGame(ArrowDir.DIR3);
//             break;
//           case 's':
//             this.processGame(ArrowDir.DIR4);
//             break;
//           case 'a':
//             this.processGame(ArrowDir.DIR5);
//             break;
//           case 'q':
//             this.processGame(ArrowDir.DIR6);
//             break;
//         }
//       })
//     ).subscribe();
//   }

//   private processGame(dir: number) {
    
//     const fixedAxis =  this.fixedAxis[dir - 1] as keyof ICoords;
//     const incAxis =  this.dataIncAxis[dir - 1] as keyof ICoords;
//     const decAxis =  this.dataDecAxis[dir - 1] as keyof ICoords;

//     // Fix hereee
//     const sortedXyz: ICoords[] = this.xyz.sort((a: any, b: any) => a[fixedAxis] - b[fixedAxis]);

//     // grouped values based on fixed axis value
//     const groupArray: ICoords[][] = Array.from({length: this.gridColCount}, ()=>[]);
//     const fixedAxisIntArray: number[] = [];
//     let fixedAxisInt = null;
//     let groupArrayIndex = 0;

//     for(let i = 0; i < sortedXyz.length; i++) {
//       fixedAxisInt = sortedXyz[i][fixedAxis];
//       groupArrayIndex = (this.axisMaxValue + fixedAxisInt);
//       fixedAxisIntArray.push(fixedAxisInt);
      
//       // Check previous value and merge
//       if (groupArray[groupArrayIndex]?.length > 0) {
//         const arrLength = groupArray[groupArrayIndex].length;
//         const lastCoords = groupArray[groupArrayIndex][arrLength - 1] as ICoords;
//         const lastValue = lastCoords.value;
//         const currentValue = sortedXyz[i].value;
//         if (
//           currentValue !== 0
//             && lastValue === currentValue
//             && (lastCoords[incAxis] - 1 === sortedXyz[i][incAxis] || lastCoords[decAxis] + 1 === sortedXyz[i][decAxis])) {
//           groupArray[groupArrayIndex][arrLength - 1] = {...lastCoords, value: 2 * lastValue};
//         } else {
//           groupArray[groupArrayIndex].push(sortedXyz[i]);
//         }
//       } else {
//         groupArray[groupArrayIndex].push(sortedXyz[i]);
//       }
//     }

//     // sorted group array values according to increase value
//     let mappedGroupArray: ICoords[][] = [];
//     if (groupArray.length !== 0) {
//       mappedGroupArray = [...groupArray].map((arr) => 
//         arr.sort((a: ICoords, b: ICoords) => b[incAxis] - a[incAxis])
//       );

//       mappedGroupArray = [...mappedGroupArray].map((arr, index1) => {
//         return arr.map((a: ICoords, index2: number) => {
//           const newItem = {} as ICoords;
//           const minSteps = Math.min(
//             (this.axisMaxValue - a[incAxis]), 
//             Math.abs((this.axisMinValue - a[decAxis]))
//           );
          
//           newItem[incAxis] = (a[incAxis] + minSteps - index2);
//           newItem[decAxis] = ((a[decAxis] - minSteps + index2));
//           return {
//             ...a,
//             ...newItem
//           }
//         })
//       });
//     }
//     this.xyz = mappedGroupArray.flat().filter((c) => c.value !== 0);
//     this.fetchHexagonData(this.radius, this.xyz);
//   }


//   private fetchHexagonData(gridRadius: number, initCoords: ICoords[]) {
//     // fetch and update hexagon grid
//     this.gameBoxService.updateHexagonGrid(gridRadius, initCoords)
//     .pipe(
//       tap((newCoords: ICoords[]) => {
//         this.xyz = [...this.xyz, ...newCoords];
//         this.updateHexagonGrid(this.xyz);
//       })
//     )
//     .subscribe();
//   }


//   private updateHexagonGrid(updatedCoords: ICoords[]) {
//     this.mappedGroupArray = [...this.mappedGroupArray].map((col) => {
//       return col.map((i: ICoords) => {
//         let mappedItem = {...i};
//         const newCoord = updatedCoords.find((c) => (i.x === c.x) && (i.y === c.y) && (i.z === c.z));
//         if (newCoord) {
//           mappedItem.value = newCoord.value;
//         } else {
//           mappedItem.value = 0;
//         }
//         return mappedItem;
//       });
//     });
//   }

// }


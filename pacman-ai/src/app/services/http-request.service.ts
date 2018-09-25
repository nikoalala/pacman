import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameMap } from '../models/game-map';
import { PredictData } from '../models/predict-data';
import { OBJECT_CODE } from '../models/object.enum';
import { PREDICT_CODE } from '../models/predict.enum';
import { GHOST_MOVE } from '../models/ghost-move.enum';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private rootUrl = "http://localhost:8080";
  private mapUrl = this.rootUrl + "/map";
  private predictUrl = this.rootUrl + "/predict";
  private ghostUrl = this.rootUrl + "/ghost";
  private size: number;
  private iteration: number = 0;

  constructor(private http: HttpClient) {
  }

  public getMap(size: number): Observable<GameMap> {
    this.size = size;
    return this.http.get<GameMap>(`${this.mapUrl}/${size}/${size}`);
  }

  public getNextMove(x: number, y: number, cellValue: OBJECT_CODE): Observable<PREDICT_CODE> {
    let predict: PredictData = new PredictData();
    predict.pos_x = x;
    predict.pos_y = y;
    predict.ite = this.iteration;
    predict.board_size = this.size;
    predict.cell_value = cellValue;

    this.iteration++;
    return this.http.post<PREDICT_CODE>(this.predictUrl, predict);
  }

  public getGhostMove(map:GameMap):Observable<GHOST_MOVE> {
    return this.http.post<GHOST_MOVE>(this.ghostUrl, map);
  }
}

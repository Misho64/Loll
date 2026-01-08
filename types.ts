
export interface Point {
  x: number;
  y: number;
}

export interface Triangle {
  points: [Point, Point, Point];
  color: string;
}

export interface ProcessingOptions {
  accuracy: number; // 0.1 to 1.0
  pointCount: number;
  edgeThreshold: number;
  watermarkOpacity: number;
}

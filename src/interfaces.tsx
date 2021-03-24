//  adding typescript

interface IData {
  title: string;
  subtitle?: string;
  range: IRange;
  textColor: ITextColor;
  data: IDataChild[];
}

interface IRange {
  min: number;
  max: number;
  variance: number;
  isPercent: boolean;
}

interface ITextColor {
  normal: string;
  aboveAvg: string;
  belowAvg: string;
}

interface IDataChild {
  name: string;
  value: number;
  avgValue: number;
  percentile?: number;
  color: string;
}

export type { IData, IDataChild }
/**
 * @name dataContext
 * @desc Context container for the data
 */
 import React, { useState, createContext } from 'react'; 
 import { IData, IRange, ITextColor, IDataChild } from '../interfaces';

 export type GlobalState = {
  title: string,
  subtitle: string,
  range: IRange,
  textColor: ITextColor,
  data: IDataChild[];
  setTitle: (input: string ) => void;
  setSubTitle: (input: string ) => void;
  setRange: (input: IRange) => void;
  setTextColor :(input: ITextColor ) => void;
  setData: (input: IDataChild[]) => void;
};

export const initialState: GlobalState = {
  title: '',
  subtitle: '',
  range:  {
    min: Infinity,
    max: -Infinity,
    variance: 0, 
    isPercent: false
  },
  textColor:  {
    normal: '',
    aboveAvg: '',
    belowAvg: ''
  },
  data:  [],
  setTitle: () => {},
  setSubTitle: () => {},
  setRange: () => {},
  setTextColor: () => {},
  setData: () => {}
};

export const globalContext = createContext<GlobalState>(initialState)

export const ContextProvider: React.FC = (props: any) => {
  
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubTitle] = useState<string>('');
  const [range, setRange] = useState<IRange>(initialState.range);
  const [textColor, setTextColor] = useState<ITextColor>(initialState.textColor);
  const [data, setData] = useState<IDataChild[]>(initialState.data);


  return <globalContext.Provider value={{title, subtitle, range, textColor,data, setTitle, setSubTitle, setRange, setTextColor, setData}}>{props.children}</globalContext.Provider>

}


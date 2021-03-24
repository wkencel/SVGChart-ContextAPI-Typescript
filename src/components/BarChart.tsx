import React, { Component } from 'react';
import logo from './logo.svg';
import '../App.css';
import '../BarChart.css';
import data from '../dummyData'
import { IDataChild } from '../interfaces'

function BarChart(){
  const barPadding = 2
  const widthScale = (w : number) : number => w * .5
  const barHeight = 20
  const barGroups = data.data.map((d : IDataChild, i : number) => {
    const width = widthScale(d.value)
    const yMid = barHeight * 0.5
    console.log(d)
    const changeColorVal = (d.value < d.avgValue) ? data.textColor.belowAvg : (d.value === d.avgValue) ? data.textColor.normal : (d.value > d.avgValue) ? data.textColor.aboveAvg : undefined
    return (
      <>
        <g transform={`translate(10, ${i * barHeight})`}>
          <g className="bar-group">
            <text 
              className="name-label" 
              x="-6" 
              y={yMid} 
              alignmentBaseline="middle" 
            >{d.name}</text>
            <rect 
              y={barPadding * 0.5} 
              fill='grey' 
              width='500px' 
              height={barHeight - barPadding} 
            ></rect>
            <rect 
              y={barPadding * 0.5} 
              width={width} 
              height={barHeight - barPadding} 
              fill={d.color} 
            />
            <g className='markers'>
              <rect 
                fill='black' 
                x={d.avgValue * .5} 
                y={barPadding * 0.5}  
                width='2' 
                height={barHeight - barPadding} 
              ></rect>
            </g>
            {/* <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{d.value}</text> */}
          </g>
          <text 
            className="value-label" 
            stroke={changeColorVal}
            x='510px' 
            y={yMid} 
            alignmentBaseline="middle" 
          >{d.value}</text>
          <text 
            className="value-label" 
            stroke='grey'
            x='555px' 
            y={yMid} 
            alignmentBaseline="middle" 
          >({d.avgValue}) {d.percentile}%</text>
        </g>
      </>)
    })

  return <svg width="800" height="300" >
    <g className="container">
      <text 
        className="title" 
        x="30" 
        y="40"
      >{`${data.title} : ${data.subtitle}` }</text>
      <g 
        className="chart" 
        transform="translate(120,60)" 
      >{barGroups}</g>
    </g>
  </svg>
}

export default BarChart
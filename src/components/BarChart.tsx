import React, { Component, useContext } from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import '../styles/BarChart.css';
// import data from '../dummyData'
import { IDataChild } from '../interfaces'
import { globalContext } from '../contexts/dataContext';

function BarChart(){
    // use the state in context
  const { 
    title,
    subtitle,
    range,
    textColor,
    data,
  } = useContext(globalContext);

  const barPadding = 4
  const widthScale = (w : number) : number => w * .5
  const barHeight = 20

  const barGroups = data.map((d : IDataChild, i : number) => {
    const width = widthScale(d.value)
    const yMid = barHeight * 0.5
    console.log(d)
    const changeColorVal = (d.value < d.avgValue) ? textColor.belowAvg : (d.value === d.avgValue) ? textColor.normal : (d.value > d.avgValue) ? textColor.aboveAvg : undefined
    const colorStyle = { color: 'red' }

    return (
        <g transform={`translate(10, ${i * barHeight})`}>
          <text 
              className="name-label" 
              x="-130" 
              y={yMid} 
              alignmentBaseline="middle" 
            >{d.name}</text>
          <g className="bar-group">
            <rect 
              y={barPadding * 0.5} 
              fill='grey' 
              width={range.max * .5}
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
                fill='darkgrey' 
                x={d.avgValue * .5} 
                y={barPadding * 0.5}  
                width='5' 
                height={barHeight - barPadding} 
              ></rect>
            </g>
            {/* <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{d.value}</text> */}
          </g>
          <text 
            className="value-label" 
            fontSize='1.2em'
            fill={changeColorVal}
            x={(range.max * .5) + 20}
            y={yMid} 
            alignmentBaseline="middle" 
          >{d.value}</text>
          <text 
            className="value-label"
            fill='grey'
            fontSize='1.2em'
            x={(range.max * .5) + 80}
            y={yMid} 
            alignmentBaseline="middle" 
            color="blue"
          >({d.avgValue})</text>
          <text 
            className="value-label"
            fill='grey'
            fontSize='1.2em'
            x={(range.max * .5) + 150}
            y={yMid} 
            alignmentBaseline="middle" 
            color="blue"
          >{d.percentile}%</text>
        </g> 
    )
  })

  return (
    <svg width={range.max} height="300" >
      <g className="container">
        <text 
          className="title" 
          x={range.min}
          y="40"
        >{`${title} : ${subtitle}` }</text>
        <g 
          className="chart" 
          transform="translate(120,60)" 
        >{barGroups}</g>
      </g>
    </svg>
  )
}

export default BarChart
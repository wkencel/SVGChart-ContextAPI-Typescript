import React, { Component, useContext } from 'react';
import  CanvasJSReact from '../canvas/canvasjs.react';
import { IDataChild, IReactChart } from '../interfaces'
import { globalContext } from '../contexts/dataContext';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function NewBar(){
    // use the state in context
    const { 
      title,
      subtitle,
      range,
      textColor,
      data,
    } = useContext(globalContext);

    // format the data for ReactCharts
    const formattedData = data.map(el => {
      const newEl : IReactChart = {y: 0, label: ''}
      newEl['y'] = el.value
      newEl['label'] = el.name
      return newEl
    })

		const options = {
			animationEnabled: true,
			theme: "light3",
			title:{
				text: title
			},
			axisX: {
				title: subtitle,
				reversed: true,
			},
			axisY: {
				title: "Value",
				includeZero: true,
				labelFormatter: addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: formattedData
			}]
		}

		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}


const addSymbols = (e:any) =>{
  let suffixes = ["", "K", "M", "B"];
  let order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
  if(order > suffixes.length - 1)
    order = suffixes.length - 1;
  let suffix = suffixes[order];
  return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}
export default NewBar
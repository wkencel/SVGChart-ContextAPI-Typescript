import {useContext } from 'react';
import './styles/App.css';
import BarChart from './components/BarChart'
import { globalContext } from './contexts/dataContext';
import dummyData from './dummyData.tsx'

function App() {
  // use the state in context
  const { 
    title, setTitle,
    subtitle, setSubTitle,
    range, setRange,
    textColor, setTextColor,
    data, setData
  } = useContext(globalContext);

  // set the context state wth Hooks  
  setTitle(dummyData.title)
  setSubTitle(dummyData.subtitle)
  setRange(dummyData.range)
  setTextColor(dummyData.textColor)
  setData(dummyData.data)

  console.log(title)
  console.log(subtitle)
  console.log(range)
  console.log(textColor)
  console.log(data)

  return (
    <div className="App">
      <p>
      Chart for Take Home
      </p>
      <BarChart />
    </div>
  );
}

export default App;

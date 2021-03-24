import { IData }from './interfaces'

const data : IData = {
  "title": "SCORE CHART",
  "subtitle": "Purchase Intent", // optional
  "range": {
    "min": 0,
    "max": 950,
    "variance": 25, /* Note: `variance` controls text color for values... 
      [logic] value's textColor is:
        if value > (avgValue + variance), then textColor is "aboveAvg"
        if value < (avgValue - variance), then textColor is "belowAvg"
        else textColor is normal  */
    "isPercent": false  // controls if % symbol is shown
  },
  "textColor": {
    "normal": "#333",
    "aboveAvg": "#6ebd23",
    "belowAvg": "#ec2819"
  },
  "data": [
    {
      "name": "Much More",
      "value": 791,
      "avgValue": 825,  // optional
      "percentile": 13, // optional
      "color": "rgba(166,206,227,1)"
    },
    {
      "name": "More",
      "value": 655,
      "avgValue": 675,
      "percentile": 28,
      "color": "rgba(31,120,180,1)"
    },
    {
      "name": "No Change",
      "value": 397,
      "avgValue": 442,
      "percentile": 20,
      "color": "rgba(178,223,138,1)"
    },
    {
      "name": "Less",
      "value": 315,
      "avgValue": 305,
      "percentile": 44,
      "color": "rgba(51,160,44,1)"
    },
    {
      "name": "Much Less",
      "value": 121,
      "avgValue": 121,
      "percentile": 39,
      "color": "rgba(251,154,153,1)"
    },
    {
      "name": "Doesn't Apply",
      "value": 240,
      "avgValue": 228,
      "percentile": 58,
      "color": "rgba(227,26,28,1)"
    }
  ]
}

export default data
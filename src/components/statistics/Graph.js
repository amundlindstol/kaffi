import React, {useEffect} from 'react';
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  AreaSeries
} from 'react-vis';
import dayjs from 'dayjs';
import {parseToGraphData} from './dateParser';


const Graph = (props) => {
  //const [data, setData] = useState([]);

  useEffect(() => {
    dayjs.extend(require('dayjs/plugin/customParseFormat'));
    dayjs.extend(require('dayjs/plugin/dayOfYear'));
    dayjs.extend(require('dayjs/plugin/weekOfYear'));
  });

  const stupidCalculating = () => {
    //setData(props.data);
    console.log("calculating...");
    if (props.data.length === 0) {
      return [];
    }
    console.log(props.data);

    let parsedData = parseToGraphData(props.data);

    return parsedData;
  }

  return (
    <XYPlot xType="time" width={600} height={300}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis title="date" />
      <YAxis title="cups" />
      <AreaSeries data={stupidCalculating()} curve={'curveMonotoneX'} />
    </XYPlot>
  );
}
export default Graph;

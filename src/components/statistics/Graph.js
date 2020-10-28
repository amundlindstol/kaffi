import React, { useEffect, useState } from 'react';
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
import { parseToGraphData } from '../functions/dateParser';
import RadioButtons from '../buttons/RadioButtons';
import { Container, Row, Spinner } from 'react-bootstrap';

const Graph = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    dayjs.extend(require('dayjs/plugin/customParseFormat'));
    dayjs.extend(require('dayjs/plugin/dayOfYear'));
    dayjs.extend(require('dayjs/plugin/weekOfYear'));
    simpleCalculating();
  }, [props.data]);

  const simpleCalculating = (timePeriod) => {
    console.log("calculating...");
    setData(parseToGraphData(props.data, timePeriod));
  }

  return (
    <>
      <Container fluid>
      <Row className="justify-content-md-center">
        {
        data.length !== 0 ?
          <XYPlot xType="time" width={window.innerWidth} height={window.innerHeight/4} className="row">
            <HorizontalGridLines className="grid" />
            <VerticalGridLines className="grid" />
            <XAxis title="date" className="axis" />
            <YAxis title="cups" className="axis" />
            <AreaSeries data={data} curve={'curveMonotoneX'} />
          </XYPlot>
        :
          <Spinner animation="border" variant="primary"/>
        }
        </Row>
        <Row className="justify-content-md-center">
          <RadioButtons simpleCalculating={simpleCalculating}/>
        </Row>
      </Container>
    </>
  );
}
export default Graph;

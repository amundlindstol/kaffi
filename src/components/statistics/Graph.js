import React, {useEffect, useState} from 'react';
import Chart from '@bit/nexxtway.react-rainbow.chart';
import Dataset from '@bit/nexxtway.react-rainbow.dataset';

const Graph = (props) => {
  // const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
  // const { faCog, faEllipsisV } = require('@fortawesome/free-solid-svg-icons');
  const [data, setData] = useState([]);

  useEffect(() => {
    stupidCalculating();
  });

  const containerStyles = {
    width: 1000,
  };

  const stupidCalculating = () => {
    setData(props.data)
    console.log(props.data);
  }

  return (
      <div style={containerStyles}>
        <div>
          <Chart
              labels={[0, 17, 35, 52]}
              type="line"
          >
            <Dataset
                title="Dataset 1"
                values={data}
                backgroundColor="#1de9b6"
                borderColor="#1de9b6"
            />
            <Dataset
                title="Dataset 2"
                values={[66, 100, 30, 156]}
                backgroundColor="#01b6f5"
                borderColor="#01b6f5"
            />
          </Chart>
        </div>
      </div>
  )
}
export default Graph;

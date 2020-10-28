import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const RadioButtons = (props) => {
    const [radioValue, setRadioValue] = useState('daily');
    
    const callBackCalculating = (value) => {
      setRadioValue(value);
      props.simpleCalculating(value)
    }
    
    const radios = [
      { name: 'Day', value: 'daily' },
      { name: 'Week', value: 'weekly' },
      { name: 'Month', value: 'monthly' },
      { name: 'Year', value: 'yearly' },
    ];
  
    return (
      <>
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              className="bg-secondary"
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => callBackCalculating(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
}

export default RadioButtons;
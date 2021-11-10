import React, { useEffect, useState } from 'react';
import { SelectField, RadioGroup, TextField } from '../../components';
import { inputDemoContainer } from './style';
import { SELECT_OPTIONS, CRICKET_RADIO_OPTIONS, FOOTBALL_RADIO_OPTIONS } from '../../config/constant';

const InputDemo = () => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('select');
  const [cricket, setCricket] = useState('');
  const [football, setFootball] = useState('');

  const handleSportChange = (event) => {
    if (event.target.value === '' || event.target.value === 'select') {
      setSport('');
    } else {
      setSport(event.target.value);
    }
    setFootball('');
    setCricket('');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSportProfileChange = (event) => {
    if (sport === 'cricket') {
      setCricket(event.target.value);
    } else {
      setFootball(event.target.value);
    }
  };

  useEffect(() => {
    console.log({
      name, sport, cricket, football,
    });
  });

  const handleBlur = () => {
    // console.log(e.target.value);
  };

  // const selectSports = value[value.sport];
  let radio = '';
  if (sport === 'cricket') {
    radio = <RadioGroup label="What To Do" value={cricket} options={CRICKET_RADIO_OPTIONS} onChange={handleSportProfileChange} onBlur={() => handleBlur(`${sport}`)} />;
  } else if (sport === 'football') {
    radio = <RadioGroup label="What To Do" value={football} options={FOOTBALL_RADIO_OPTIONS} onChange={handleSportProfileChange} onBlur={() => handleBlur(`${sport}`)} />;
  }
  return (
    <div style={inputDemoContainer}>
      <TextField label="Name" value={name} defaultValue="" onChange={handleNameChange} onBlur={() => handleBlur.name} />
      <SelectField
        options={SELECT_OPTIONS}
        onBlur={() => handleBlur('sport')}
        onChange={handleSportChange}
        defaultText="Select"
      />
      {radio}
    </div>
  );
};

export default InputDemo;

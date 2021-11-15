import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { inputDemoContainer, btnStyle, btnContainer } from './style';
import {
  DEFAULTSELECT, SELECT_OPTIONS, CRICKET_RADIO_OPTIONS, FOOTBALL_RADIO_OPTIONS,
} from '../../config/constant';
import { getError, hasErrors, isTouched } from '../../lib/utils/helper';
import {
  SelectField, RadioGroup, TextField, Button,
} from '../../components';

const schema = Yup.object({
  name: Yup.string().min(3).max(10).label('Name')
    .required(),
  sport: Yup.string().required().label('Sport'),
  football: Yup.string().label('What you do?').when('sport', {
    is: (value) => value === 'football',
    then: Yup.string().required(),
    otherwise: Yup.string().min(0),
  }),
  cricket: Yup.string().label('What you do?').when('sport', {
    is: (value) => value === 'cricket',
    then: Yup.string().required(),
    otherwise: Yup.string().min(0),
  }),
});

const InputDemo = () => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [cricket, setCricket] = useState('');
  const [football, setFootball] = useState('');
  const [error, setError] = useState([]);
  const [touched, setTouched] = useState([]);

  const handleErrors = (formValues) => {
    const {
      name: newName, sport: newSport, football: newFootball, cricket: newCricket,
    } = formValues;
    schema.validate({
      name: newName, sport: newSport, football: newFootball, cricket: newCricket,
    }, { abortEarly: false }).then(() => { setError({}); }).catch((errors) => {
      const schemaErrors = {};
      if (errors) {
        errors.inner.forEach((err) => { schemaErrors[err.path] = err.message; });
        setError(schemaErrors);
        console.log('handleError', error);
      }
    });
  };

  const handleBlur = (type) => {
    touched[type] = true;
    setTouched(touched);
    handleErrors({
      name, sport, football, cricket,
    });
    console.log(touched);
  };
  const onClick = () => {

  };

  const handleSportChange = async (event) => {
    const { value } = event.target;
    if (value === '' || value === DEFAULTSELECT) {
      setSport('');
    } else {
      setSport(value);
    }
    setCricket('');
    setFootball('');
    setName(name);
    handleErrors({
      name, sport, football, cricket,
    });
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

  let radio = '';
  if (sport === 'cricket') {
    radio = (
      <RadioGroup
        label="What To Do"
        value={cricket}
        options={CRICKET_RADIO_OPTIONS}
        onChange={handleSportProfileChange}
        onBlur={() => handleBlur('cricket')}
        error={getError(touched, error, 'cricket')}
      />
    );
  } else if (sport === 'football') {
    radio = (
      <RadioGroup
        label="What To Do"
        value={football}
        options={FOOTBALL_RADIO_OPTIONS}
        onChange={handleSportProfileChange}
        onBlur={() => handleBlur('football')}
        error={getError(touched, error, 'football')}
      />
    );
  }
  return (
    <>
      <div style={inputDemoContainer}>
        <TextField
          label="Name"
          value={name}
          defaultValue=""
          onChange={handleNameChange}
          onBlur={() => handleBlur('name')}
          errorMessage={getError(touched, error, 'name')}
        />
        <SelectField
          options={SELECT_OPTIONS}
          onBlur={() => handleBlur('sport')}
          onChange={handleSportChange}
          defaultText="Select"
          error={getError(touched, error, 'sport')}
          selectLabel="Select the game you want to play?"
        />
        { radio }
      </div>
      <div style={btnContainer}>
        <Button color="gray" style={btnStyle} value="Cancel" />
        <Button color={hasErrors(error) || !isTouched(touched) ? 'gray' : '#28a745'} style={btnStyle} value="Submit" disabled={hasErrors(error) || !isTouched(touched)} onClick={onClick} />
      </div>
    </>
  );
};

export default InputDemo;

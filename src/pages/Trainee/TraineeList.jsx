import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import { traineeListStyle } from './style';

const TraineeList = (props) => {
  const { trainees } = props;
  return (
    <div style={traineeListStyle}>
      <ul>
        {
          trainees.map((trainee) => (
            <li>
              <Link to={`/trainee/${trainee.id}`}>
                <div>{trainee.name}</div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

TraineeList.propTypes = {
  trainees: PropTypes.objectOf.isRequired,
};

TraineeList.defaultPros = {
  trainee: [],
};

export default TraineeList;

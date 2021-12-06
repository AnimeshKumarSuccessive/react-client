import React from 'react';
import { AddDialog, TableList } from './Components';
import trainees from './data/trainee';
import TraineeList from './TraineeList';

const Trainee = () => (
  <>
    <AddDialog />
    <TableList />
    <TraineeList trainees={trainees} />
  </>
);

export default Trainee;

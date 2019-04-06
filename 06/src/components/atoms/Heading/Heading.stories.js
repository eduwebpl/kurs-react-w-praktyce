import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
  .add('Normal', () => <Heading>Hello Roman</Heading>)
  .add('big', () => <Heading big>Hello Roman</Heading>);

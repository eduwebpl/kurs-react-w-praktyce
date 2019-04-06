import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Atoms/Paragraph', module).add('Normal', () => <Paragraph>Hello Roman</Paragraph>);

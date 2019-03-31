import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>Note</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates fugit minima veritatis
      dolore, atque illo sequi excepturi fugiat deleniti! Autem doloribus quia delectus aspernatur
      amet quasi, assumenda cumque hic culpa.
    </p>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;

import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = () => (
  <UserPageTemplate pageType="note">
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
  </UserPageTemplate>
);

export default Notes;

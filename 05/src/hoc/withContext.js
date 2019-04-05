import React from 'react';
import PageContext from 'context';

const withContext = Component => {
  return function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {context => <Component {...props} context={context} />}
      </PageContext.Consumer>
    );
  };
};

export default withContext;

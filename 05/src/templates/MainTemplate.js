import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

class MainTemplate extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['twitters', 'articles', 'notes'];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
      console.log(this.state);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MainTemplate);

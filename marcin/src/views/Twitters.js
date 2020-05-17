import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems as fetchItemsAction } from 'actions';

class Twitters extends Component {
  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    const { twitters } = this.props;
    return (
      <GridTemplate>
        {twitters.map(({ title, content, twitterName, _id: id }) => (
          <Card id={id} title={title} content={content} twitterName={twitterName} key={id} />
        ))}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};
const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsAction('twitters')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Twitters);

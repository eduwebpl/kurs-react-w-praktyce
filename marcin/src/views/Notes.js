import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems as fetchItemsAction } from 'actions';

class Notes extends Component {
  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    const { notes } = this.props;
    return (
      <GridTemplate>
        {notes.map(({ title, content, created, _id: id }) => (
          <Card id={id} title={title} content={content} created={created} key={id} />
        ))}
      </GridTemplate>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};
const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsAction('notes')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);

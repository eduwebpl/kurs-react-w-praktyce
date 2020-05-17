import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems as fetchItemsAction } from 'actions';

class Articles extends Component {
  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    const { articles } = this.props;
    return (
      <GridTemplate>
        {articles.map(({ title, content, articleUrl, _id: id }) => (
          <Card id={id} title={title} content={content} articleUrl={articleUrl} key={id} />
        ))}
      </GridTemplate>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = state => {
  const { articles } = state;
  return { articles };
};
const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsAction('articles')),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);

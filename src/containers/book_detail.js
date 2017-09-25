import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BookDetail extends Component {
    render () {
        if (!this.props.book) {
            return <div>Select a book to see details.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
                <div>Pages: {this.props.book.page}</div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        book: state.activeBook
    };
}

BookDetail.propTypes = {
    book: PropTypes.object
};

export default connect(mapStateToProps)(BookDetail);

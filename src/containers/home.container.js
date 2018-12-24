import React, {Component} from 'react';
import { connect } from 'react-redux';
import { GET_CATEGORIES } from '../actions';

class Home extends Component {
    constructor(props) {
        super(props);
        console.log('props;: ', this.props)
    }
    componentWillMount() {
        this.props.getAllCategories();
    }
    render() {
        return(
            <React.Fragment>
                home 2 here
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
};

const mapDispatchToProps = dispatch => ({
        getAllCategories: () => dispatch(GET_CATEGORIES())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
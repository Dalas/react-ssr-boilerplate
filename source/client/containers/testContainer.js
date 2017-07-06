/**
 * Created by yura on 07.07.17.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const mapStateToProps = state => {
    return { ...state }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({}, dispatch)
    }
};


class TestContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestContainer)

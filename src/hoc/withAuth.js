import React from "react";
import axios from "axios";

const withAuth = (WrapperComponent) => {
    return class withAuth extends React.Component {
        state = {
            isAuth: null
        }

        componentDidMount() {
            axios.get('/isAuthenticated')
                .then(res => this.setState({ isAuth: res.data.isAuthenticated }));
        }

        render() {
            return (<WrapperComponent isAuth={this.state.isAuth} {...this.props} />);
        }
    }
}

export default withAuth;
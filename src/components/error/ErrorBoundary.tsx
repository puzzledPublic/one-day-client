import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error: Error, info: any) {
        this.setState({hasError: true});
        console.log(error);
    }

    render() {
        if(this.state.hasError) {
            return <h1>에러 발생.</h1>
        }
        return (
            this.props.children
        )
    }
}

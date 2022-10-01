import {Component} from "react";
import has from "has";
class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <h1>Error 404 just happen</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary
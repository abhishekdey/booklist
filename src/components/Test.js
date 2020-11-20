class Test extends React.Component {
    constructor(props){ }

    render() {
        return (
            <div>
                <WrappedComponent {...this.state.props, this.state.props1}></WrappedComponent>
            </div>
        )
    }
}
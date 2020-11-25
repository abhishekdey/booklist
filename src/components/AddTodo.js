import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import { getTodoById } from '../redux/selectors';
import getListSync from '../redux/effects';
import store from '../redux/store';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '', result: {} };
        this.listTodo();
    }

    //displatching async action
    listTodo() {
        store.dispatch(getListSync());
    }

    updateInput(input) {
        this.setState({ result: getTodoById });
        this.setState({ input });
    }

    handleAddTodo = (e) => {
        this.props.addTodo(this.state.input);
        this.setState({ input: '' });
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={e => this.updateInput(e.target.value)}></input>
                <button onClick={this.handleAddTodo}>Add Todo</button>
            </div>
        )
    }
}

export default connect(null, { addTodo })(AddTodo);
import { Component } from "react";
import styled from "styled-components";

class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state={

        }

    }

    render() {
        const {todos, actions} = this.props;
        return (
            <ul>
                {todos.map((todo) => <li>{todo.id}</li>)}
            </ul>
        )
    }
}

export default MainSection;
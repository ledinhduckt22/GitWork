import React, {Component} from 'react';
import styled from 'styled-components';
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip
`
const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`
//New component based on Button
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`
class OnHover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bool: false,
        }
    }

    componentDidMount() {};
    render() {
        console.log(this.state.bool);
        return (
            <div class="hoverMe">
            <Title onMouseEnter={() => this.setState({ bool: true })} onMouseLeave={() => this.setState({ bool: false })}>
              Goood Job gio minh moi biet 
            </Title>
            <Wrapper>
                {
                this.state.bool ? (
                  <span>Hi onMouseEnter</span>
                ) : (
                  <div>Bye onMouseLeave</div>
                )
              }
            </Wrapper>
            </div>
        )
    }
}

export default OnHover;
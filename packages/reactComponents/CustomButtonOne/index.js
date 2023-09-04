
import { Text } from 'react-native';
import React, { Component } from 'react'


class CustomButtonOne extends Component {

    render() {
        const { text = "确定", disabled = false } = this.props;
        return (
     	      <Text style={{backgroundColor:'green'}}>{text}</Text>
        )
    }
}

export default CustomButtonOne
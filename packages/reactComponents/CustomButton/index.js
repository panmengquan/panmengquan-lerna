
import { Text } from 'react-native';
import React, { Component } from 'react'


class CustomButton extends Component {

    render() {
        const { text = "确定", disabled = false } = this.props;
        return (
     	      <Text style={{backgroundColor:'red'}}>{text}</Text>
        )
    }
}

export default CustomButton
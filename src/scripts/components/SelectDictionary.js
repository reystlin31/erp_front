import React, { Component } from 'react';

import CreatableSelect from 'react-select/lib/Creatable';
import api from "../Api"

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      options: [],
      value: undefined,
    };
  }

  componentWillMount()
  {
    api('GET', this.props.dictionary, 'views')
    .then((result)=>{
        var arr = Object.keys(result).map(function (key) { return {value:result[key], label:result[key]}; });
        this.setState({options:arr});
    });
  }

    render() {
      const { isLoading, options, value } = this.state;
      return (
        <CreatableSelect
          placeholder={this.props.placeholder}
          isClearable
          isDisabled={isLoading}
          isLoading={isLoading}
          onChange={(newValue) => {
            console.log(newValue);
            this.setState({ value: newValue });
            const e = {
              target:{
                name: this.props.name,
                type: 'custom-select',
                value: newValue.value,
              }
            };
            this.props.onChange(e);
          }}
          onCreateOption={(inputValue) => {
            this.setState({ isLoading: true });
            api('POST', this.props.dictionary, 'add',{value:inputValue})
            .then((result)=>{
              const { options } = this.state;
              var newOption = {value:result, label:result}; 
              this.setState({
                isLoading: false,
                options: [newOption, ...options],
                value: newOption,
              });
            });
          }}
          options={options}
          value={value}
        />
      );
    }
  }
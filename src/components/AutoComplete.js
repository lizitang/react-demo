import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultValue: '',
            activeIndex: -1
        }
    }
    render() {
        const {defaultValue,activeIndex} = this.state;
        //向外暴露的属性options:当前组件的建议列表
        const {value,options} = this.props;
        return (
            <div>
                <input value={defaultValue||value}/>
                {options.length>0 && (
                    <ul>
                        {options.map((item,index)=>{
                            return (
                                <li key={index}>{item.text||item}</li>
                            )
                        })
                    }
                    </ul>
                )}
            </div>
        )
    }
}

//通用组件最好写一下propTypes约束？？
AutoComplete.PropTypes = {
    value:PropTypes.string.isRequired,
    options:PropTypes.array.isRequired,
    onValueChange:PropTypes.func.isRequired
}

export default AutoComplete
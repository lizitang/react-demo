import React, { Component } from 'react'

class FormItem extends Component{
    render () {
        const {label,children,valid,error} = this.props;
        return (
            <div>
                <label style={{display:'inline-block',
                                margin:'20px 0 0 0',
                                width:'60px',
                                textAlign:'right'}}>{label}</label>
                {children}
                {!valid && <span  style={{color:'red'}}>{error}</span>}
            </div>
        )
    }
}
export default FormItem
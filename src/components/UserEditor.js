import React,{ Component } from 'react'
import Form from '../utils/Form'
import FormItem from '../utils/FormItem'
import PropTypes from 'prop-types'
import {browserHistory} from 'react-router'

//有校验的表单
class UserEditor extends Component{
    handleSubmit (e) {
        e.preventDefault();
        const {form: {name, age, gender}, formValid, editTarget} = this.props;
        if(!formValid) {
            console.log('error submit')
            return;
        }

        let editType = '添加';
        let apiUrl = 'http://localhost:3000/user';
        let method = 'post';
        if(editTarget) {
            editType = '编辑';
            apiUrl += '/'+editTarget.id;
            method = 'put'
        }
        fetch(apiUrl,{
            method,
            body:JSON.stringify({
                name: name.value,
                age: age.value,
                gender: gender.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) =>res.json())
        .then((res) => {
            if(res.id){
                debugger
                console.log(editType+'用户成功')
                this.context.router.history('/user/list');
                return;
            }else {
                console.log(editType+'用户失败')
            }
        }).catch((err) => console.error(err));
    }
    componentWillMount () {
        const {editTarget,setFormValues} = this.props;
        if(editTarget){
            setFormValues(editTarget)
        }
    }
    render(){
        const {form: {name, age, gender}, onFormChange} = this.props;
        return (
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <FormItem label="用户名：" valid={name.Valid} error={name.error}>
                    <input
                        type="text"
                        value={name.value}
                        onChange={(e) => onFormChange('name', e.target.value)}
                    />
                </FormItem>
                <FormItem label="年龄：" valid={age.valid} error={age.error}>
                    <input
                        type="number"
                        value={age.value || ''}
                        onChange={(e) => onFormChange('age', +e.target.value)}
                    />
                </FormItem>
                <FormItem label="性别：" valid={gender.valid} error={gender.error}>
                    <select
                        value={gender.value}
                        onChange={(e) => onFormChange('gender', e.target.value)}
                    >
                        <option value="">请选择</option>
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </FormItem>
                <input style={{
                    display:'block',
                    margin:'20px 0 0 55px'}} 
                type="submit" value="提交"/>
            </form>
        )
    }
}

UserEditor.contextTypes = {
    router:PropTypes.object.isRequired
}//?????

UserEditor = Form({
    name:{
        defaultValue:'',
        rules:[
            {
                pattern: function (value) {
                  return value.length > 0;
                },
                error: '请输入用户名'
            },
            {
                pattern: /^.{1,4}$/,
                error: '用户名最多4个字符'
            }
        ]
    },
    age: {
        defaultValue: 0,
        rules: [
          {
            pattern: function (value) {
              return value >= 1 && value <= 100;
            },
            error: '请输入1~100的年龄'
          }
        ]
    },
    gender: {
        defaultValue: '',
        rules: [
          {
            pattern: function (value) {
              return !!value;
            },
            error: '请选择性别'
          }
        ]
    }
})(UserEditor)

export default UserEditor
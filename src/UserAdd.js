  import React,{Component} from 'react'
  import {
    Form, Icon, Input, Button, Select,
  } from 'antd';
  import 'antd/dist/antd.css';
  import HomeLayout from './layouts/HomeLayout'

  // ant-design 表单
  const { Option } = Select;
  const FormItem = Form.Item;
  let myStyle = {width:'300px',margin:'50px 0 0 50px'};

  class NormalLoginForm extends Component {
    
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          fetch('http://localhost:3000/user',{
            method:'post',
            body:JSON.stringify(values),
            headers:{
              'content-type':'application/json'
            }
          }).then(res=>res.json()).then((res)=> {
              debugger;
              if(res.id) {
                this.props.history.push('/user/list')
                return;
              }
          })
        }
      });
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <HomeLayout title="添加用户页面">
          <Form onSubmit={this.handleSubmit} className="login-form" style={myStyle}>
            <FormItem 
              label="用户名"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18 }}
            >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入用户名' },
                {max:10,message:'用户名长度不可超过10'}],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem 
              label="年龄"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18 }}
            >
              {getFieldDecorator('age', {
                rules: [{ required: true, message: '请输入年龄' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="number" placeholder="age" />
              )}
            </FormItem>
            <FormItem
              label="性别"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: '请输入你的性别' }],
            })(
              <Select
                placeholder="请选择"
                onChange={this.handleSelectChange}
              >
                <Option value="男">男</Option>
                <Option value="女">女</Option>
              </Select>
            )}
            </FormItem>
            <FormItem  wrapperCol={{ span: 12, offset: 5 }}>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </FormItem>
          </Form>
        </HomeLayout>  
      );
    }
  }

  const UserAdd = Form.create()(NormalLoginForm);

  export default UserAdd
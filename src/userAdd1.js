import React,{ Component } from 'react'
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';

//有校验的表单
class UserAdd1 extends Component{
    handleSubmit (e) {
        e.preventDefault();
        const {form: {name, age, gender}, formValid} = this.props;
        if(!formValid) {
            console.log('error submit')
            return;
        }
        fetch('http://localhost:3000/user',{
            method: 'post',
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
                console.log('添加成功')
            }else {
                console.log('添加失败')
            }
        }).catch((err) => console.error(err));
    }
    render(){
        const {form: {name, age, gender}, onFormChange} = this.props;
        return (
            <HomeLayout title="添加用户">
                <UserEditor/>
            </HomeLayout>
        )
    }
}


export default UserAdd1
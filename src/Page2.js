import React,{ Component } from 'react'

//有校验的表单
class Page2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                name: {
                  valid: false,
                  value: '',
                  error: ''
                },
                age: {
                  valid: false,
                  value: 0,
                  error: ''
                },
                gender: {
                  valid: false,
                  value: '',
                  error: ''
                }
            }
        };
    }
    handleValueChange (field, value, type='string') {
        if(type === 'number') {
            value = +value;
        }
        const {form} = this.state;
        const newFieldObj = {value,valid:true,error:''};
        switch(field) {
            case 'name': {
                if(value.length>5){
                    newFieldObj.error = '用户名最多5个字符'
                    newFieldObj.valid = false;
                }else if (value.length === 0) {
                    newFieldObj.error = '请输入用户名';
                    newFieldObj.valid = false;
                }
                break;
            }
            case 'age': {
                if (value > 100 || value <= 0) {
                  newFieldObj.error = '请输入1~100之间的数字';
                  newFieldObj.valid = false;
                }
                break;
            }
            case 'gender': {
                if (!value) {
                  newFieldObj.error = '请选择性别';
                  newFieldObj.valid = false;
                }
                break;
            }
        }
        this.setState({form:{...form,[field]:newFieldObj}})

    }
    handleSubmit (e) {
        e.preventDefault();
        const {form: {name, age, gender}} = this.state;
        console.log(name.valid,age.valid,gender.valid)
        if(!name.valid || !age.valid || !gender.valid) {
            console.log('请填写正确的信息后重试');
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
        const {form: {name, age, gender}} = this.state;
        return (
            <div style={{margin:'50px 0 0 50px'}}>
                <header>添加用户</header>
                <main>
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                        <label>用户名：</label>
                        <input type="text" value={name.value} onChange={(e)=>this.handleValueChange('name',e.target.value)}/>
                        {!name.valid && <span style={{color:'red'}}>{name.error}</span>}
                        <br/>
                        <label 
                        style={{display:'inline-block',
                                margin:'20px 0 0 0',
                                letterSpacing:'5px'}}
                        >年龄：</label>
                        <input type="number" value={age.value || ''} onChange={(e)=>this.handleValueChange('age',e.target.value,'number')}/>
                        {!age.valid && <span style={{color:'red'}}>{age.error}</span>}
                        <br/>
                        <label style={{
                            display:'inline-block',
                            margin:'20px 0 0 0',
                            letterSpacing:'5px'}}
                        >性别：</label>
                        <select value={gender.value} onChange={(e)=>this.handleValueChange('gender',e.target.value)}>
                            <option value="">请选择</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                        {!gender.valid && <span style={{color:'red'}}>{gender.error}</span>}
                        <input style={{
                            display:'block',
                            margin:'20px 0 0 55px'}} 
                        type="submit" value="提交"/>
                    </form>
                </main>
            </div>
        )
    }
}

export default Page2
import React,{ Component } from 'react'
import HomeLayout from './layouts/HomeLayout'

class UserList extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  componentWillMount(){
    fetch('http://localhost:3000/user')
      .then(res =>res.json())
      .then(res=>{
        this.setState({
          data:res
        })
      })
  }
  handleEdit (user) {

  }
  handleDel (user) {
    const confirmed = window.confirm(`确定要删除用户 ${user.name} 吗？`);
    if(confirmed) {
        fetch('http://localhost:3000/user/'+user.id,{
            method:'delete'
        }).then(res=>res.json())
        .then(res=>{
            this.setState({
                data:this.state.data.filter(item=>item.id!==user.id)
            })
        }).catch(err=>{
            console.log(err)
        })
    }
  }
  render(){
    const {data} = this.state;
      return (
        <HomeLayout title="用户列表页">
          <div style={{width:'600px',margin:'30px 30px'}}>
            <h4>Middle size table</h4>
            <table style={{width:'300px',borderCollapse:"collapse",border:'1px solid #000'}}>
                <thead>
                    <tr style={{border:'1px solid #000'}}>
                     <th>用户名</th>
                     <th>年龄</th>
                     <th>性别</th>
                     <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user)=>{
                            return (
                                <tr key={user.id} style={{border:'1px solid #000'}}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.gender}</td>
                                    <td>
                                        <a href="javascript:void(0)" onClick={() => this.handleEdit(user)}>编辑</a>
                                        &nbsp;
                                        <a href="javascript:void(0)" onClick={() => this.handleDel(user)}>删除</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
          </div>
        </HomeLayout>
      )
  }
}

export default UserList
 /* <Table columns={columns} dataSource={data} size="middle"/> */
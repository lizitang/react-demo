import React,{ Component } from 'react'
import { Table } from 'antd';
import HomeLayout from './layouts/HomeLayout'

const columns = [{
    title: '用户名',
    dataIndex: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
  }, {
    title: '性别',
    dataIndex: 'gender',
  }];
class Page4 extends Component{
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
  render(){
    const {data} = this.state;
      return (
        <HomeLayout title="用户列表页">
          <div style={{width:'600px',margin:'30px 30px'}}>
            <h4>Middle size table</h4>
            <Table columns={columns} dataSource={data} size="middle"/>
          </div>
        </HomeLayout>
      )
  }
}

export default Page4
//纯js，未用框架
 /* <tbody>
      {
        data.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
            </tr>
          );
        })
      }
    </tbody> */
import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'

class Home extends Component {
    render(){
        return (
            /* 运用组件,重构页面 */ 
            <HomeLayout title="welcome to home">
                <Link to="/user/add">
                    <div>ant-design表单</div>
                </Link>
                <Link to="/page2">
                    <div>表单验证无高阶组件</div>
                </Link>
                <Link to="/page3">
                    <div>封装组件</div>
                </Link>
                <Link to="/user/list">
                    <div>ant 用户列表</div>
                </Link>
                <Link to="/user/userList">
                    <div>可编辑删除列表</div>
                </Link>
                <Link to="/user/autoCompleteInput">
                    <div>自动完成组件</div>
                </Link>
            </HomeLayout>
            /*w未使用组件在下面 */
            // <div>
            //     <div>this is home!</div>
            //     <div>
            //         <Link to="/user/add">
            //             <div>ant-design表单</div>
            //         </Link>
            //         <Link to="/page2">
            //             <div>表单验证无高阶组件</div>
            //         </Link>
            //         <Link to="/page3">
            //             <div>封装组件</div>
            //         </Link>
            //         <Link to="/user/list">
            //             <div>ant 用户列表</div>
            //         </Link>
            //     </div>
            // </div>
        )
    }
}

export default Home

// import React,{ Component } from 'react'
// import View from './View'
/* 函数式声明组件 */
// const App = ()=>(
//     <div>this is App</div>
// )
/* 类方式声明组件 */
// class App extends Component{
//     //state运用
//     constructor(props){//构造函数
//         super(props);
//         this.state = {text:'this is text,hahaha'}
//     }
//     render(){
//         let text = this.state.text;
//         return (
//            <View text={text}/>
//         )
//     }
// }
// export default App

/* --------------------------------------------------------------- */

//router路由的使用和跳转
import React,{Component} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
// 从react-router-dom包中导入Router和Route，BrowserRouter是Router中的一种
import Home from './Home'
import UserAdd from './UserAdd';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import UserList from './UserList'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/user/add" component={UserAdd}></Route>
                    <Route path="/Page2" component={Page2}></Route>
                    <Route path="/Page3" component={Page3}></Route>
                    <Route path="/user/list" component={Page4}></Route>
                    <Route path="/user/editList" component={UserList}></Route>
                </div>
            </Router>
        )
    }
}

export default App
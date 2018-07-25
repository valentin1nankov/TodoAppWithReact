import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AddTodo from './addTodo'


class View extends React.Component{
    

    render(){

        return (
            <Provider>
                <AddTodo />
            </Provider>
        );
    }
}

export default View;
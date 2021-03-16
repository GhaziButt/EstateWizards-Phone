import MyTabs from './App';

import allreducers from './reducers'
import {createStore} from 'redux'
import {Provider , useSelector } from 'react-redux'
import React , { useEffect, useState } from 'react';

const mystore=createStore(allreducers);

 Index = () => (

    <Provider store={mystore}>
        <MyTabs/>
    </Provider>

);
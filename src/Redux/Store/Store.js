import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../State/CounterSlice';


export default configureStore ({

    reducer : {
        counter : counterReducer

    }


});
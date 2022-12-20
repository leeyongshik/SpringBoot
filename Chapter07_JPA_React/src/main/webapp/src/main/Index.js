import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';


const Index = () => {
    /*
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/hello')
             .then(res => setHello(res.data))
             .catch(error => console.log(error))
    },[])
    */

    return (
        <div>
            <h3>***메인 화면***</h3>
            <hr></hr>
            <p><Link to='/user/writeForm'>입력</Link></p>
            <p><Link to='/user/list'>출력</Link></p>
            <p><Link to='/user/updateForm'>수정</Link></p>
            <p><Link to='/user/deleteForm'>삭제</Link></p>
            <p><Link to='/user/uploadForm'>업로드</Link></p>
        </div>
    );
};

export default Index;
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div>
            <div>
            <h3>***메인 화면***</h3>
            <hr></hr>
            <p><Link to='/store/writeForm'>글쓰기</Link></p>
            <p><Link to='/store/list'>리스트</Link></p>
        </div>
        </div>
    );
};

export default Index;
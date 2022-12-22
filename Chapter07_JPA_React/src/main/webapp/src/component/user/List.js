import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const List = () => {

    const [list, setList] = useState([])
    const [keyword, setKeyword] = useState('') 
    const [searchOption, setSearchOption] = useState('name')

    useEffect(() => {
        axios.get('http://localhost:8080/user/getList')
             .then(res => setList(res.data))
             .catch(error => console.log(error))
    },[])

    const onSearch = (e) => {
        e.preventDefalut()
        axios.get('http://localhost:8080/user/search',
              {params : {
                searchOption : searchOption,
                keyword : keyword
              }})
             .then(res => setList(res.data))
             .catch(error => console.log(error))
    }

    return (
        <div>
            <h1>
                <Link to='/'>
                <img alt="" src="../img/images.png" width="100" height="100" style={{cursor:'pointer'}}/>
                </Link>
                리스트
            </h1>
            <hr/>
            <table border="1">
                <thead>
                    <tr>
                        <th width="150">이름</th>
                        <th width="150">아이디</th>
                        <th width="200">비밀번호</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(item => {
                            return(
                                <tr key={item.id}>
                                    <td align='center'>{item.name}</td>
                                    <td align='center'>{item.id}</td>
                                    <td align='center'>{item.pwd}</td>
                                </tr>
                        )
                        })
                    }
                </tbody>
            </table>

            <div style={{width : '450px', textAlign: 'center', margin : '30px'}}>
                <form id="searchForm">
                    <select id="searchOption" name="searchOption" onChange={e => setSearchOption(e.target.value)}>
                        <option value="name">이름</option>
                        <option value="id">아이디</option>
                    </select>
                    <input type="text" id="keyword" name="keyword" value={ keyword } onChange={e => setKeyword(e.target.value)}/>
                    <button onClick={ onSearch }>검색</button>
                </form>
            </div>
        </div>
    );
};

export default List;
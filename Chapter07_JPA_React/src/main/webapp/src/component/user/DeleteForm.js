import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../css/DeleteForm.module.css';

const DeleteForm = () => {

    

    const [deleteId, setDeleteId] = useState('')
    const [deleteIdDiv, setDeleteIdDiv] = useState('')


    const navigate = useNavigate()
    
    const onSearch = () => {
        setDeleteIdDiv('')

        axios.get(`http://localhost:8080/user/getUser?id=${deleteId}`)
             .then(res => {
                    setDeleteIdDiv(res.data ? 
                        axios.delete(`http://localhost:8080/user/delete?id=${deleteId}`)
                             .then(() => {
                                alert("회원삭제 완료");
                                navigate("/user/list");
                            })
                             .catch(error => console.log(error))
                        : '찾는 아이디가 없습니다.')
             })
             .catch(error => console.log(error))
    }

    return (
        <div>
            <h1>
                <Link to='/'>
                <img alt="" src="../img/images.png" width="100" height="100" style={{cursor:'pointer'}}/>
                </Link>
                회원수정
            </h1>
            <hr/>
            <table border="1" className={styles.deleteForm}>
                <tbody>
                    <tr>
                        <td width="200" align="center">삭제 할 아이디 입력</td>
                        <td>
                            <input type="text" name="deleteId" onChange={e => setDeleteId(e.target.value)}/>
                            <button onClick={ onSearch }>삭제 </button>
                            <div id="deleteIdDiv">{deleteIdDiv}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br></br>


            
        </div>
    );
};

export default DeleteForm;
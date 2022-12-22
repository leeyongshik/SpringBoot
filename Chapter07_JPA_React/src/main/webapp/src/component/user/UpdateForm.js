import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../css/UpdateForm.module.css';

const UpdateForm = () => {
    const [updateName, setUpdateName] = useState('')
    const [updateNameDiv, setUpdateNameDiv] = useState('')

    const [nameDiv, setNameDiv] = useState('')
    const [pwdDiv, setPwdDiv] = useState('')
    
    const [form, setForm] = useState({
        name : '',
        id : '',
        pwd : ''
    })
    const {name, id, pwd} = form

    const navigate = useNavigate()

    const [show, setShow] = useState(true);

    const onInput = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name] : value
        })
    }
    
    const onSearch = () => {
        setUpdateNameDiv('')

        axios.get(`http://localhost:8080/user/getUser?id=${updateName}`)
             .then(res => {
                    setUpdateNameDiv(res.data ? '' : '찾는 아이디가 없습니다.')
                    setForm(res.data || '')
                    setShow(res.data ? false : true)

                    //res.data ===null ? (setForm(res.data), setShow(false)) : (setUpdateName('찾는 아디 없습니다.'), setShow(true))
                    
                    // if(res.data===null){
                    //     setResultDiv('찾는아이디없다')
                    // }else {
                    //     setUser(res.data)
                    //     setResultDiv('')
                    //     setShow(false)
                    // }
    
             })
             .catch(error => console.log(error))
    }

    const onUpdateSubmit = (e) => {
        e.preventDefault()


        setNameDiv("");
        setPwdDiv("");

        var sw = 0;
        if (!name) {
            setNameDiv("이름을 입력하세요");
            sw = 1;
        }
        if (pwd === "") {
            setPwdDiv("비밀번호 입력하세요");
            sw = 1;
        }

        if (sw === 0) {
            axios
                .put(
                    "http://localhost:8080/user/update",
                    "name=" + name + "&id=" + id + "&pwd=" + pwd
                )
                .then(() => {
                    alert("회원수정 완료");
                    navigate("/user/list");
                })
                .catch((error) => console.log(error));
        }
    }

    const onReset = (e) => {
        e.preventDefault()
        onSearch()

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
            <table border="1">
                <tbody>
                    <tr>
                        <td width="200" align="center">수정 할 아이디 입력</td>
                        <td>
                            <input type="text" name="updateName" onChange={e => setUpdateName(e.target.value)}/>
                            <button onClick={ onSearch }>검색</button>
                            <div id="updateNameDiv">{updateNameDiv}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            
            <div id="updateDiv" hidden={show}>
                <form className={styles.updateForm} >
                <table border="1">
                    <tbody>
                        <tr>
                            <td>이름</td>
                            <td>
                                <input type="text" name='name' id="name" value={name} onChange={ onInput }/>
                                <div id='nameDiv' >{nameDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>아이디</td>
                            <td>
                                <input type="text" name='id' id="id" value={id} readOnly/>
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>
                                <input type="text" name='pwd' value={pwd} onChange={ onInput }/>
                                <div id="pwdDiv">{pwdDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' align="center">
                                <button onClick={ onUpdateSubmit }>등록</button>
                                <button onClick = { onReset }>취소</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </form>
            </div> 
                
        </div>
    );
};

export default UpdateForm;
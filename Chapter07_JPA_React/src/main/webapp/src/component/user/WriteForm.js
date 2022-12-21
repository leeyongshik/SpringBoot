import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../css/WriteForm.module.css';

const WriteForm = () => {
    const [form, setForm] = useState({
        name : '',
        id : '',
        pwd : ''
    })
    const {name, id, pwd} = form
    
    const [nameDiv, setNameDiv] = useState('')
    const [idDiv, setIdDiv] = useState('')
    const [pwdDiv, setPwdDiv] = useState('')

    const navigate = useNavigate()

    const onInput = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name] : value
        })
    }
    const writeSubmit = (e) => {
        e.preventDefault()


        setNameDiv("");
        setIdDiv("");
        setPwdDiv("");

        var sw = 0;
        if (!name) {
            setNameDiv("이름을 입력하세요");
            sw = 1;
        }
        if (id === "") {
            setIdDiv("아이디를 입력하세요");
            sw = 1;
        }
        if (pwd === "") {
            setPwdDiv("비밀번호 입력하세요");
            sw = 1;
        }

        if (sw === 0) {
            axios
                .post(
                    "http://localhost:8080/user/write",
                    "name=" + name + "&id=" + id + "&pwd=" + pwd
                )
                .then(() => {
                    alert("회원가입 완료");
                    navigate("/user/list");
                })
                .catch((error) => console.log(error));
            }
    }
    const checkId = () => {
        axios.get(`http://localhost:8080/user/checkId?id=${id}`)
             .then(res => {
                setIdDiv(res.data === false ? '사용 가능' : '사용 불가능')
             })
             .catch()
    }


    return (
        <>
            <h1>
                <Link to='/'>
                <img alt="" src="../img/images.png" width="100" height="100" style={{cursor:'pointer'}}/>
                </Link>
                회원가입
            </h1>
            <hr/>
            <form onSubmit={ writeSubmit } className={styles.writeForm}>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>이름</td>
                            <td>
                                <input type="text" name='name' id="name" onChange={ onInput }/>
                                <div id='nameDiv' >{nameDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>아이디</td>
                            <td>
                                <input type="text" name='id' id="id" onChange={ onInput } onBlur={ checkId }/>
                                <div id="idDiv">{idDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>
                                <input type="text" name='pwd' onChange={ onInput }/>
                                <div id="pwdDiv">{pwdDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' align="center">
                                <button type='submit'>등록</button>
                                <button type='reset'>취소</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default WriteForm;
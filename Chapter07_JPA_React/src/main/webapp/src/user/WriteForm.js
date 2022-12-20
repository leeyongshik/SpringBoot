import React from 'react';
import { Link } from 'react-router-dom';

const WriteForm = () => {
    return (
        <>
            <h1>
                <Link to='/'>
                <img alt="" src="" width="100" height="100" style={{cursor:'pointer'}}/>
                </Link>
                회원가입
            </h1>
            <hr/>
            <form>
                <table border="1">
                    <thead>
                    <tr>
                        <td>이름</td>
                        <td>
                        <input type="text" name="name"/>
                        <div id="nameDiv"></div>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>
                        <input type="text" name="id" id="id"/>
                        <div id="idDiv"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td>
                        <input type="text" name="pwd"/>
                        <div id="pwdDiv"></div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2' align="center">
                            <input type="button" value="등록" id="writeBtn"/>
                            <input type="reset" value="취소"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default WriteForm;
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Index from './component/main/Index';
import DeleteForm from './component/user/DeleteForm';
import List from './component/user/List'
import UpdateForm from './component/user/UpdateForm';
import UploadForm from './component/user/UploadForm';
import WriteForm from './component/user/WriteForm'

const App = () => {
  return (
    <BrowserRouter>
      <>
       {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/user/writeForm' element={<WriteForm/>}></Route>
          <Route path='/user/list' element={<List/>}></Route>
          <Route path='/user/updateForm' element={<UpdateForm/>}></Route>
          <Route path='/user/deleteForm' element={<DeleteForm/>}></Route>
          <Route path='/user/uploadForm' element={<UploadForm/>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;

/*
REST API			            axios => axios의 request method

Post : 데이터 등록 및 전송	   axios.post()
Get : 데이터 조회			       axios.get()
Put : 데이터 수정			       axios.put()
Delete : 데이터 삭제 		     axios.delete()
*/
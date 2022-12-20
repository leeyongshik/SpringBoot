import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Index from './main/Index';
import List from './user/List'
import WriteForm from './user/WriteForm'

const App = () => {
  return (
    <BrowserRouter>
      <>
       {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/user/writeForm' element={<WriteForm/>}></Route>
          <Route path='/user/list' element={<List/>}></Route>
          {/* <Route path='/user/updateForm' element={<user/>}></Route>
          <Route path='/user/deleteForm' element={<user/>}></Route>
          <Route path='/user/uploadForm' element={<user/>}></Route> */}
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
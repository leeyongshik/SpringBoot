import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const UploadForm = () => {

  const imgRef = useRef()
  const [file, setFile] = useState('')
  const [showImgSrc, setShowImgSrc] = useState('')
  const [uploadImgSrc, setUploadImgSrc] =useState('')

  const onCamera = () => {
    imgRef.current.click()
  }
      
  const readURL = (input) => {
    var reader = new FileReader();
    reader.readAsDataURL(input.files[0]);

    reader.onload = () => {
      console.log(input.files[0])
      setShowImgSrc(reader.result)
      setFile(input.files[0])
    }
  }

  const onUploadSubmit = () => {
    
    var formData = new FormData()
    formData.append('img', file)

    axios.post('http://localhost:8080/user/upload2', formData, {
      headers : {
        'content-Type' : `multipart/form-data`
      }
    })
         .then(res => setUploadImgSrc(res.data))
         .catch(error => console.log(error))
  }


    return (
        <div>
            <h1>
                <Link to='/'>
                <img alt="" src="../img/images.png" width="100" height="100" style={{cursor:'pointer'}}/>
                </Link>
                업로드
            </h1>
            <hr/>

         
            <img src={ showImgSrc } width='200' height='200' /> &nbsp;
            <img src='../img/camera.png' width='50' height='50' onClick={ onCamera } alt='카메라' style={{cursor:'pointer'}}/>
            <input type="file" name='img' ref={ imgRef } onChange={e => readURL(e.target)} style={{visibility:'hidden'}} />
            <br></br>
            <button onClick={ onUploadSubmit }>이미지 등록</button>
            <h4>이미지 등록 후</h4>
            <img src={ uploadImgSrc } width='200' height='200' />
      </div>
    );
};

export default UploadForm;
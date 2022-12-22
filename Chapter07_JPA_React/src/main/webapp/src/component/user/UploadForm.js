import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UploadForm = () => {




    //파일 미리볼 url을 저장해줄 state
    const [fileImage, setFileImage] = useState("");

    // 파일 저장
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
    };

    // 파일 삭제
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
    };
      



    const uploadFiles = axios.create({
        baseURL, // 이미 선언되었다고 가정함
        headers: { "Content-type": "multipart/form-data" },
        timeout: 5000,
    });
      
    const onFileChanges = ({ target: { files } }) => {
        uploadFiles
          .post("/upload", { image_file: files[0] })
          .then(({ data: { images } }) => setImagesList(images));
    };


    

    return (
        <div>
            <h1>
                <Link to='/'>
                <img alt="" src="../img/images.png" width="100" height="100" style={{cursor:'pointer'}}/>
                </Link>
                업로드
            </h1>
            <hr/>






            <h1>이미지 미리보기</h1>
      <table>
        <tbody>
          <tr>
            <th>이미지</th>
            <td>
              <div>
                {fileImage && (
                  <img
                    alt="sample"
                    src={fileImage}
                    style={{ margin: "auto" }}
                  />
                )}
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage}
                  />

                  <button
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      width: "55px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteFileImage()}
                  >
                    삭제
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>





            <br/><br/><br/><br/><br/><br/><br/><br/>
            <form id="uploadForm">
                <div id="imgDiv"></div>
                {/* <img id="showImg" width="300" height="300"/> */}
                <br/>


                <form>
                <input type="file" onChange={(event) => onFileChanges(event)} />
                </form>


                <br></br>
                <button>이미지 등록</button>
            </form>
        </div>
    );
};

export default UploadForm;
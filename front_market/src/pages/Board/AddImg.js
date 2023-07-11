import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import * as s from './AddImgStyle';

const AddImg = () => {
    const navigate = useNavigate();
    const [imgFiles, setImgFiles] = useState([]);
    const [profileImgURLs, setProfileImgURLs] = useState([]);
    const fileRef = useRef();
    const queryClient = useQueryClient();
  
    const profileImgChangeHandle = () => {
      fileRef.current.click();
    };
  
    const profileImgFileChangeHandle = (e) => {
      const files = e.target.files;
      const newImgFiles = [...imgFiles];
      const newProfileImgURLs = [...profileImgURLs];
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
  
        if (file) {
          const fileReader = new FileReader(); // 새로운 FileReader 객체 생성
  
          fileReader.onload = (event) => {
            newProfileImgURLs.push(event.target.result);
            setProfileImgURLs(newProfileImgURLs);
          };
  
          fileReader.readAsDataURL(file);
          newImgFiles.push(file);
        }
      }
  
      setImgFiles(newImgFiles);
      e.target.value = null;
    };
  
    const profileImgSubmit = useMutation(
      async () => {
        const formData = new FormData();
        imgFiles.forEach((file) => {
          formData.append("productImgFiles", file);
        });
  
        const option = {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data",
          },
        };
  
        const response = await axios.post(
          "http://localhost:8080/market/img/test",
          formData,
          option
        );
        return response;
      },
      {
        onSuccess: () => {
            alert("ㅎㅇ")
        //   navigate("/mypage");
        },
      }
    );
  
    const backButton = () => {
    //   navigate("/mypage");
    };
  
    return (
      <div css={s.container}>
          <button onClick={backButton} css={s.backButton}>뒤로</button>
        <header css={s.headerContainer}>
          <div css={s.comment} onClick={profileImgChangeHandle}>&nbsp;프로필 사진 변경&nbsp;</div>
        </header>
        <main css={s.mainContainer}>
          {profileImgURLs.map((url, index) => (
            <img css={s.img} key={index} src={url} alt="" />
          ))}
          <input
            css={s.fileInput}
            type="file"
            onChange={profileImgFileChangeHandle}
            ref={fileRef}
            multiple // 다중 파일 선택을 위해 multiple 속성 추가
          />
        </main>
        <footer css={s.footerContainer}>
          <button css={s.cancelButton} onClick={backButton}>취소</button>
          <button css={s.saveButton} onClick={() => profileImgSubmit.mutate()}>저장</button>
        </footer>
      </div>
    );
  };
  
  export default AddImg;
  
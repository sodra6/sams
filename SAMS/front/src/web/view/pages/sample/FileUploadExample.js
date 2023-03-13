import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { callApi } from "../../../js/apis/callApi";
import { bootstrap as BT } from "../../../js/util/commonUtil";

function FileUploadExample(props) {
  const fileList = []; // 업로드한 파일들을 저장하는 배열

  const onSaveFiles = e => {
    const uploadFiles = Array.prototype.slice.call(e.target.files); // 파일선택창에서 선택한 파일들

    uploadFiles.forEach(uploadFile => {
      fileList.push(uploadFile);
    });
  };

  const onClickUpload = () => {
    const formData = new FormData();

    fileList.forEach(file => {
      // 파일 데이터 저장
      formData.append("multipartFiles", file);
    });

    // 객체
    const foodDto = {
      name: "피자",
      price: 13500,
    };

    formData.isUpload = true;
    formData.append("exampleMap", new Blob([JSON.stringify(foodDto)], { type: "application/json" })); // 직렬화하여 객체 저장

    // FormData의 value 확인
    for (let value of formData.values()) {
      console.log(value);
    }

    callApi.upload("http://localhost/api/uploadFile", formData);
  };

  const onClickDownload = e => {
    const { name } = e.target;

    callApi.download("http://localhost/api/downloadFile", { fileName: name }).then(res => {
      console.log(res);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      let fileName = "unknown";

      const contentDisposition = res.headers["content-disposition"]; // 파일 이름

      console.log(contentDisposition.split(";"));
      if (contentDisposition) {
        const [fileNameMatch] = contentDisposition.split(";").filter(str => str.includes("filename"));
        console.log(fileNameMatch);
        if (fileNameMatch) [, fileName] = fileNameMatch.split("=");
      }

      console.log(decodeURI(fileName));
      console.log(link);
      link.href = url;
      link.setAttribute("download", decodeURI(fileName));
      link.style.cssText = "display:none";
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  };
  const [img, setImg] = useState("");

  useEffect(() => {
    onClickImage();

    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  const onClickImage = useCallback(
    e => {
      callApi.download("http://localhost/api/downloadFile", { fileName: "이미지2.jpg" }).then(res => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        setImg(url);
      });
    },
    [img]
  );

  return (
    <div>
      <h3>
        <b>업로드</b>
      </h3>
      <input type="file" multiple /* 파일 여러개 선택 가능하게 하기 */ onChange={onSaveFiles} />
      <BT.Button onClick={onClickUpload}>파일 업로드</BT.Button>
      <br />
      <br />
      <br />
      <h3>
        <b>다운로드</b>&nbsp;(C:\myUpload\이미지.jpg 필요)
      </h3>
      <BT.Button onClick={onClickDownload} name="이미지.jpg">
        이미지
      </BT.Button>
      <br />
      <br />
      <br />
      <h3>
        <b>사진</b>&nbsp;(C:\myUpload\이미지.jpg 필요)
      </h3>
      <img src={img} onClick={onClickImage} />
    </div>
  );
}

export default FileUploadExample;

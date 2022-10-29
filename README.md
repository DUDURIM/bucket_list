<div align="center">
<h1>Bucket_list</h1>
<img width="750" alt="banner7" src="https://user-images.githubusercontent.com/87938427/198845052-c02d964f-d494-4838-9829-79b7e01da34f.png">

</div>

## Bucket_list
- 개인 프로젝트
- 220301
- Use: HTML, CSS, JavaScript, JQuery, Bootstrap, React.js, Firebase, AWS

## 프로젝트 소개
- Bucket_list 서비스란?
- 직접 버킷리스트 목록을 추가, 완료, 삭제가 가능합니다.
- Firebase를 이용하여 데이터를 연동해서 서비스를다해보았다.


<div align="center">
<h1>실행 및 오류 발생 해결법</h1>
</div>
</br>
<div>
웹사이트 주소 : https://dudu-react-basic-f61c1.web.app/
</div>
</br>
<div>

** 실행시 오류 $ react-scripts start 'react-scripts'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다. error Command failed with exit code 1.

발생시 터미널에 npm update 입력 후 npm start 또는 yarn start 입력

업데이트 하고도 실행이 안되면 npm install -g react-scripts 입력

➜ test git:(master) git push -u origin master To https://github.com/donggu1105/test.git ! [rejected] master -> master (fetch first) error: failed to push some refs to 'https://github.com/donggu1105/test.git' hint: Updates were rejected because the remote contains work that you do hint: not have locally. This is usually caused by another repository pushing hint: to the same ref. You may want to first integrate the remote changes hint: (e.g., 'git pull ...') before pushing again. hint: See the 'Note about fast-forwards' in 'git push --help' for details.

다음과 같은 오류가 뜨면 기존데이터가 손실될수있어서 푸쉬를 막은것이다.

git push origin +master 입력으로 강제 푸쉬를 진행하면 된다.

https://dudurim.github.io/bucket_list/

https://dudu-react-basic-f61c1.web.app/


babel-eslint 오류뜨면 
$ npm install eslint --save-dev
$ npm install babel-eslint --save-dev
설치 진행후 yarn start

material 오류뜨면
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
설치 진행후 yarn start

색상 #673ab7 변경도 가능


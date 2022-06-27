bucket_list는 직접 버킷리스트 목록을 추가, 완료, 삭제가 가능합니다.

이 페이지는 REACT를 사용했습니다.

감사합니다.

** 실행시 오류 $ react-scripts start 'react-scripts'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다. error Command failed with exit code 1.

발생시 터미널에 npm update 입력 후 npm start 또는 yarn start 입력

업데이트 하고도 실행이 안되면 npm install -g react-scripts 입력

➜ test git:(master) git push -u origin master To https://github.com/donggu1105/test.git ! [rejected] master -> master (fetch first) error: failed to push some refs to 'https://github.com/donggu1105/test.git' hint: Updates were rejected because the remote contains work that you do hint: not have locally. This is usually caused by another repository pushing hint: to the same ref. You may want to first integrate the remote changes hint: (e.g., 'git pull ...') before pushing again. hint: See the 'Note about fast-forwards' in 'git push --help' for details.

다음과 같은 오류가 뜨면 기존데이터가 손실될수있어서 푸쉬를 막은것이다.

git push origin +master 입력으로 강제 푸쉬를 진행하면 된다.

https://dudurim.github.io/bucket_list/

https://dudu-react-basic-f61c1.web.app/
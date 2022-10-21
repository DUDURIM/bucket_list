//Detail.js
// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams, useHistory } from "react-router-dom";
// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러옵니다.
import { deleteBucket, deleteBucketFB, updateBucket, updateBucketFB } from "./redux/modules/bucket";

import Button from "@material-ui/core/Button";

const Detail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const bucket_index = params.index;

  // 스토어에서 상태값 가져오기
  const bucket_list = useSelector((state) => state.bucket.list);


  return (
    <div>
      <h1>{bucket_list[bucket_index] ? bucket_list[bucket_index].text : ""}</h1>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          dispatch(updateBucket(bucket_index));
          dispatch(updateBucketFB(bucket_list[bucket_index].id));
          history.goBack();
        }}>완료하기</Button>

      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          //   dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야함
          // 예시
          // console.log("삭제하기 버튼을 눌렀어!");
          dispatch(deleteBucket(bucket_index));
          dispatch(deleteBucketFB(bucket_list[bucket_index].id));
          history.goBack();
        }}>삭제하기</Button>

      <Button
        variant="outlined"
        color="success"
        onClick={() => {
          history.goBack();
        }}>뒤로가기</Button>
    </div>
  );
};

export default Detail;
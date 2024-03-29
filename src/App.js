import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
// useDispatch를 가져와요!
import { useDispatch, useSelector } from "react-redux";
// 액션생성함수도 가져오고요!
import { addBucket, loadBucketFB, addBucketFB } from "./redux/modules/bucket";

// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Progress from "./Progress";
import Spinner from "./Spinner";
import {db} from "./firebase";
import { collection, doc,  getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";


function App() {

  const text = React.useRef(null);
  // useHistory 사용하는 것과 비슷하죠? :)
  const dispatch = useDispatch();
  const is_loaded = useSelector(state => state.bucket.is_loaded);

  React.useEffect( () => {
    dispatch(loadBucketFB());
  }, []);

    // 데이터 삭제하기
    // const docRef = doc(db, "bucket", "7tU616y5QtckRCDKr4Mk");
    // deleteDoc(docRef);

    // // 데이터 수정하기
    // const docRef = doc(db, "bucket", "7tU616y5QtckRCDKr4Mk");
    // // updateDoc(docRef, {completed: true});
    
    
    // 데이터 추가하기
    // addDoc(collection(db, "bucket"), {tet: "new", completed: false});


    // 데이터 가져오기
    // const query = await getDocs(collection(db, "bucket"));
    // console.log(query);
    // query.forEach((doc) => {
    //   console.log(doc.id, doc.data());
    // });

  const addBucketList = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // 여긴 이제 주석처리!
    // setList([...list, text.current.value]);

    // dispatch(createBucket({text: text.current.value, completed: false}));

    dispatch(addBucketFB({text: text.current.value, completed: false}));
    text.current.value="";
  };

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress/>
        <Line />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <Switch>
          {/* <Route
            path="/"
            exact
            render={(props) => <BucketList list={list} />}
          /> */}
          {/* 이제는 render를 사용해서 list를 넘겨줄 필요가 없죠! 버킷리스트가 리덕스에서 데이터를 알아서 가져갈거니까요! */}
          <Route exact path="/" component={BucketList} />
          <Route exact path="/detail/:index" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
      
      {/* 위로가기 버튼생성 */}
      {/* <button onClick={() =>{
        window.scrollTo({top:0, left:0, behavior:"smooth"});
      }}>위로 가기</button> */}

      {!is_loaded && <Spinner/>}

    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  & > * {
    padding: 5px;
  }
  & input{
    border: 1px solid #888;
    width: 70%;
    margin-right: 10px;
  }

  & input:focus {
    outline: none;
    border: 1px solid #a3a0a9;
  }

  & button {
    width: 25%;
    color: #fff;
    border: #a3a0a9;
    background: #a3a0a9;
  }

`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: #a3a0a9;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
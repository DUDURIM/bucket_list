import React from "react";
import {useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";

const NotFound = (props) => {
    const history = useHistory();
    return (
        <>
        <h1>주소가 올바르지 않아요!</h1>
        <p>주소를 다시 입력하거나 <br/>뒤로가기 버튼을 눌러주세요</p>
        <Button 
        variant="outlined"
        color="primary" 
        onClick={() =>{
            history.goBack();
        }}>뒤로가기</Button>
        </>
    );
};

export default NotFound;
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress =(props) => {
    const bucket_list = useSelector((state) => state.bucket.list);
    console.log(bucket_list);

    let count = 0;
    bucket_list.map((b, idx) => {
        if(b.completed){
            count ++;
        }
    })

    console.log(count);
    return (
        <ProgressBar>
            <HighLight width={(count/bucket_list.length) * 100 + "%"}/>
            <Dot/>
        </ProgressBar>
    )
}



const ProgressBar = styled.div`
    background-color: #eee;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

const HighLight = styled.div`
    background-color: #a3a0a9;
    transition: 1s;
    width: ${(props) => props.width};
    height: 20px;
    border-radius: 10px;
`;

const Dot = styled.div`
    width: 40px;
    height: 40px;
    background: white;
    border: 5px solid #a3a0a9;
    border-radius: 40px;
    margin: 0px 0px 0px -20px;
`;



export default Progress;
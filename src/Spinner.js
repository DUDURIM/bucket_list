import React from "react";
import styled from  "styled-components";
// import {Eco} from "@material-ui/icons";
import CellWifiIcon from '@mui/icons-material/CellWifi';
const Spinner = (props) => {
    return (
        <Outter>
            {/* 아이콘 들어가는부분 */}
            <CellWifiIcon style={{
                color: "#efeff0", fontSize: "150px",
            }}/>
        </Outter>
    );
}

const Outter = styled.div`
    background: #a3a0a9;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Spinner;
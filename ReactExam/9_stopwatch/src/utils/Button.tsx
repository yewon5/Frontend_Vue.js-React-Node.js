import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react"

type ButtonType = "NORMAL" | "SUCCESS" | "ERROR";

interface IProps {
    type:ButtonType;
    onClick: ()=>void;
    children: React.ReactNode; 
}

type styledProps = Omit<IProps, "onClick" | "children">;

const Button: React.FC<IProps> = ({type, onClick, children}) => {
    return <Container type={type} onClick={onClick}>{children}</Container>
};

const getStyledByType = (props: styledProps) => {
    let color = "white";
    let backgroundColor = "#333333";

    switch(props.type){
        case "NORMAL":
            color = "white";
            backgroundColor = "#333333";
            break;
        case "SUCCESS":
            color = "gray"
            backgroundColor = "#00f"
            break;
        case "ERROR":
            color = "blue"
            backgroundColor = "#f00"
            break;
    }

    return css`
        color: ${color};
        background-color: ${backgroundColor};
    `;
}

const Container = styled.div<styledProps>`
    width: 100px;
    height: 100px;
    border-radius: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    ${getStyledByType}
			
	// 가상 셀렉터
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

export default Button;
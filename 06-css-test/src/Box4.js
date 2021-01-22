import React from 'react';
import styled from 'styled-components';

// 동적 스타일이 적용되지 않은 Box
// const BoxCommon = styled.div`
// height: 50px;
// background-color: #aaaaaa;`;

// const BoxBig = styled(BoxCommon)`width: 200px;`;

// const SmallBox = styled(BoxCommon)`width: 100px;`;

// function Box({ size }){
//     if (size === 'big'){
//         return <BoxBig>큰 박스</BoxBig>;
//     } else {
//         return <SmallBox>작은 박스</SmallBox>;
//     }
// }

// 동적 스타일이 적용된 Box
const BoxCommon = styled.div`
width: ${props => (props.isBig ? 200:100)}px;
height: 50px;
background-color: #aaaaaa;
`;

function Box({ size }){
    const isBig = size === 'big';
    const label = isBig ? '큰 박스':'작은 박스';
    return <BoxCommon isBig={isBig}>{label}</BoxCommon>;
}

export default Box;

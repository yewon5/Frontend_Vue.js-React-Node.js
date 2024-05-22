import * as React from 'react';

//뷰포트 사이즈 조절했을때 크기 표시
const useWindowWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth); //가로길이 

    //이벤트 추가/제거 재사용되므로 함수를 따로 생성
    const handelResize = (ev:UIEvent)=>{
        setWidth(window.innerWidth);
        //console.log("event:", ev)
    }

    React.useEffect(()=>{ //리턴을 clean이 받음
        //윈도우 객체에 이벤트를 걸어야함. ('resize', 이벤트 처리 함수(리스너핸들러))
        window.addEventListener('resize', handelResize);
        return ()=>{ //함수를 리턴 = clean-up 기능
            window.removeEventListener('resize', handelResize)
        } //크기변경시 다시 계산되지 않게 이벤트 띄우기
    }, [width]);
    
    const cleanup = ()=>{
        window.removeEventListener('resize', handelResize)
    }

    return {width, cleanup};
}

export default useWindowWidth;
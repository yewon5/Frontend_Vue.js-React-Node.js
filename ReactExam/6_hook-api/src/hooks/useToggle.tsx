import * as React from 'react';
/*
//Interface 방식
interface UseToggleReturnType {
    hideCount: boolean;
    toggle : ()=>void;
}

export function useToggle():UseToggleReturnType{
    const[hideCount, setHideCount] = React.useState(false);

    const toggle = ()=>{setHideCount(!hideCount)};

    return {
        hideCount,
        toggle
    };
}
*/

//Type Alias 방식
type UseToggleReturnType = [boolean, ()=>void];

//function useToggle():UseToggleReturnType {
const useToggle = ():UseToggleReturnType => {
    const[hideCount, setHideCount] = React.useState(false);
    const toggle = ()=> setHideCount(!hideCount)

    return [hideCount, toggle]
}

export default useToggle;
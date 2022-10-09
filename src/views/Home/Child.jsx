import React from 'react';

let Child = () => {
    console.log('子组件刷新了')
    return(
        <>
            子组件
        </>
    )
}

export default React.memo(Child)

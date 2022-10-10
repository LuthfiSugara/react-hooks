import { useState } from 'react';

const ComponentWithUseState = () => {

    const [count, setCount] = useState(5);
    const [title, setTitle] = useState("Nice state");

    const changeCount = (operation) => {
        if(operation === "add"){
            if(count < 10) setCount(count + 1);
            if(count == 9) setTitle("limit bars is 10");
        }else{
            if(count > 0) setCount(count - 1);
        }
    }
    
    const renderBar = () => {
        const bars = [];

        for(let i = 0; i < count; i++){
            bars.push(
                <div key={Math.random} style={{ 
                    backgroundColor: 'rgba(212, 113, 211, 0.3)',
                    height: '100%',
                    width: '10%'
                }}>{count}</div>
            );

            return bars;
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <div style={{
                border: "0.1rem solid black",
                height: "100px",
                width: "80%",
                margin: "2rem auto",
                display: "flex",
            }}>
                {renderBar()}
            </div>
            <button onClick={() => changeCount("substract")}>Substract</button>
            <button onClick={() => changeCount("add")}>Add Bar</button>
        </div>
    )
}

export default ComponentWithUseState;
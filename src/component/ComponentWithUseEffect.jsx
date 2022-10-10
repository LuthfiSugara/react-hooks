import { useEffect, useState } from 'react';
import axios from "axios";

export default function ComponentWithUseEffect(){

    // const [count, setCount ] = useState(0);
    // const [count2, setCount2 ] = useState(0);

    // useEffect(() => {
    //     console.log("Something Change")
    // }, [count])

    // useEffect(() => {
    //     console.log("Count 2 Change")
    // }, [count2])

    const [showStatement, setShowStatement] = useState(false);
    const [boxPicked, setBoxPicked] = useState(0);
    const [image, setImage] = useState("");

    console.log(boxPicked);

    useEffect(() => {
        setTimeout(() => {
            console.log("set timeout")
            setShowStatement(true);
        }, 2000);
    }, []);

    // const [counter, setCounter] = useState(0);

    useEffect(() => {
        if(boxPicked === 0){
            setImage("")
        }else{
            fetchImage(boxPicked);
        }
    }, [boxPicked])

    const fetchImage = async (boxId) => {
        if(boxId === 1){
            const response = await axios.get('https://randomfox.ca/floof/?ref=apilist.fun');
            setImage(response.data.image);
        }else if(boxId === 2){
            const response = await axios.get('https://aws.random.cat/meow?ref=apilist.fun');
            setImage(response.data.file);
        }else if(boxId === 3){
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            setImage(response.data.message);
        }
    }

    return (
        <div>
            {/* <h1>{count}</h1>
            <h1>{count2}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount2(count2 + 2)}>Add 2</button> */}

            {showStatement && (
                <>
                    <h1 className='scary-text'>Pick a Box</h1>
                    <div className='box-container'>
                        <div id='1' className='box' onClick={(e) => setBoxPicked(parseInt(e.target.id))}>
                            <h2>1</h2>
                        </div>
                        <div id='2' className='box' onClick={(e) => setBoxPicked(parseInt(e.target.id))}>
                            <h2>2</h2>
                        </div>
                        <div id='3' className='box' onClick={(e) => setBoxPicked(parseInt(e.target.id))}>
                            <h2>3</h2>
                        </div>
                    </div>
                </>
            )}

            {image && (
                <img src={image} className="animal-image" />
            )}
            {/* <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Add</button> */}
        </div>
    );
}
import { useState, useEffect } from 'react';

const C2 = () => {

    let [msgs,setMsgs] = useState([]);

    useEffect( () => setMsgs(['A message from componentDidMount Equivalent.']) ,[]);

    useEffect( () => {
        if((msgs.length+1)%5==0){
            setMsgs([...msgs,'Message from ComponentDidUpdate Equivalent']);
        }
    } ,[msgs]);

    return (
        <div>
            <h3>C2 Messages </h3>
            <ol>
                {msgs && msgs.length > 0 && (msgs.map(msg => <li>{msg}</li>))}
            </ol>
            <button type="button"
                onClick={e => setMsgs([...msgs,'A New Message @ '+ (new Date()) ])} >
                Add A Message
            </button>
        </div>
    );
}

export default C2;
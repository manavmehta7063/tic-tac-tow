import { useState } from "react";

export default function Player({initialName,symbol, isActive, onChangeName}){
    const [ playerName, setPlayerName ] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false)

    function handleEditbtn(){
        setIsEditing(editing => !editing)
        if(isEditing){
            onChangeName(symbol, playerName)
        }
        
    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing){
        editablePlayerName = <input type="text" name="" value={playerName} onChange={handleChange} id="" required/>
    }

    return(
        <li className={isActive?'active':undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditbtn}>{isEditing?'Save':'Edit'}</button>
        </li>

    );
}
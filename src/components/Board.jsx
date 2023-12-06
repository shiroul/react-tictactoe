function Board({value, onHandleClick}){

    return <div className='board' onClick={onHandleClick}>{value}</div>
}

export default Board
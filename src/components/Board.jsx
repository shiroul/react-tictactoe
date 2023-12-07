function Board({value, onHandleClick}){
    console.log('ehe')

    return <div className='board' onClick={onHandleClick}>{value}</div>
}

export default Board
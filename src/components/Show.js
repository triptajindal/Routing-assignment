import React from 'react';
const  Show= (props) => {
    const { todos } = props
    //console.log(props)
    const Showlist= todos.map(info => {
        return (
            <div className="showw" key={info.id}>
                <p> <h6> Name:</h6> {info.name}</p>
                <p> <h6> Birthday:</h6> {info.birthday}</p>
                <p> <h6>About: </h6>{info.about}</p>
            </div>
        )
    })
  return(
    <div className='todos collection'>
    { Showlist }
     </div>
  )
}
export default Show;

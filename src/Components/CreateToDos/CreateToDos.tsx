import React, { FC } from 'react';


type Props = {
  addTitle: any;
}

const CreateToDos: FC<Props> = ({ addTitle }) => {
  return (
    <div>
      <form>
        <input type='text' onChange={addTitle}></input>
      </form>
    </div>
  )
}

export default CreateToDos;
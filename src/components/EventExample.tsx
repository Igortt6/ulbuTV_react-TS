import React, { FC, useState } from "react";

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('')

    const changeHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);

    }

    const dragHendler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');

    }
    return (

        <div style={{ display: "flex", gap: 20 }} >
            <input value={value} onChange={changeHendler} type="text" />
            <button onClick={clickHandler}>click</button>
            <div draggable onDrag={dragHendler} style={{ width: 200, height: 200, background: 'red', }} ></div>
            <div style={{ width: 200, height: 200, background: 'red', }} ></div>

        </div >
    )

}
export default EventExample;
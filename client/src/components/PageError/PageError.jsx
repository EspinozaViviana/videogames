import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from './PageError.module.css'

const PageError = ()=>{
    const navigate= useNavigate()
    const [image, setImage]=useState('mimic')
    const [textImage, setTextImage]=useState('')

    const onClickImage = ()=>{}

    return(
        <span>
            <h5>You shouldn't be here</h5>
            <p>Oh, look, a treasure...<p className={style.image}>Open it?</p></p>
          <button>Home</button>
        </span>
    )
}

export default PageError;
import React, { useEffect } from 'react'
import { images } from './assets/images'
import './app.scss'
export default function App() {

    return <div className='myapp'>
        hello
        <img src={images.test}></img>
    </div>
}
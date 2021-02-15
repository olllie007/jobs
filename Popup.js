import React from 'react'
import Content from './Popup_content'
function Popup(props)  {
    
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
       
                <Content></Content>
        
            </div>
        </div>
    ) : '';
}

export default Popup
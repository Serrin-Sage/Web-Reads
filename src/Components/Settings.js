import ColorSwitcher from './ColorSwitcher'
import PictureSwitcher from './PictureSwitcher'


function Settings({changeColor, changePic}) {

  return (
    <div className='settings'>
        <ColorSwitcher changeColor={changeColor}/>
        <PictureSwitcher changePic={changePic}/>
    </div>
    
  )
}

export default Settings
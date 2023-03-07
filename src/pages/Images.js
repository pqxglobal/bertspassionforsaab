import Image from 'next/image';
import './Images.module.css'

function Images(props) {
  return (
    <div className={'image-container'}>
      <Image src={props.src} alt='' className={'image'} />
    </div>
  )
}

export default Images
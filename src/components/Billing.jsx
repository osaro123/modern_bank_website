import React from 'react'
import { bill,apple,google } from '../assets'
import styles, {layout} from '../style'

const Biiling = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className='w-[100%] h-[100%] relative z-[5]' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easy Control your <br className='sm:block hidden'/> billing & invoicing
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore officia quos quaerat odio tempora, laudantium totam cumque possimus reiciendis ipsam odit ex autem. Autem quas modi ratione reiciendis eum. Inventore!</p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="google_pay" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
        </div>
      </div>
    </section>
  )
}

export default Biiling

import React from 'react'
import styles from './footer.module.css'

/* icons */
import address from '../icon/address.png'
import experience from '../icon/experience.png'
import facebook from '../icon/facebook.png'
import line from '../icon/line.png'
import linkedin from '../icon/linkedin.png'
import number from '../icon/number.png'

/* img */
import profile from '../img/profile.png'

const Footer = () => (
  <div
    className={styles.container}
  >
    <div className={styles.item1}>
      <div className={styles.item1item1}>
        <img src={profile}></img>
      </div>
      <div className={styles.item1item2}>
        <b>Matt</b> Kang
      </div>
    </div>
    <div className={styles.item2}>
      <div>

      </div>
    </div>
      <div className={styles.item3}>
          <img src={experience} className={styles.item3item1}>
          </img>
        <div>
          <div className={styles.content}>
            Futures/Forex Senior Representative
          </div>
          <div className={styles.subtitle}>
           Cannon Trading Company
          </div>
          <div className={styles.content}>
            Branch Manager
          </div>
          <div className={styles.subtitle}>
            Kingsview Asset Management
          </div>
          <div className={styles.content}>
            Forex Trader
          </div>
          <div className={styles.subtitle}>
            Institutionally, Individually
          </div>
        </div>
      </div>
      <div className={styles.item4}>
        <div>
          <div className={styles.item4item1}><img src={number}></img></div>
          <div className={styles.item4item1}><img src={address}></img></div>
        </div>
        <div>
          <div className={styles.item4item2text1}>310-859-9572
          </div>
          <div className={styles.item4item2text2}>9301 Wilshire Blvd. Suite #515<br/>
            Beverly Hills, CA 90210
          </div>
        </div>
    </div>
  </div>
)

export default Footer

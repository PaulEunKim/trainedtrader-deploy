import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container.js'
import styles from './index.module.css'


const ThirdPage = () => (
  <Container>
    <div className={styles.font}>
      <div className={styles.paragraphHeader}>두번째- 트레이딩 디렉션 관련</div>
        <div className={styles.paragraph}>Day-Trading 마켓 변동에 따라서 갔다가 갔다가 하루에 수십번씩 트레이딩 하시는 분들 많은데요 지금 당장 그만 두시는길 바랍니다. 마켓은 기간이 짧으면 짧을수록 예측하고 트레이딩 하기가 더 힘들어집니다. 그리고 정 초 단타 트레이딩을 하시고 싶다 하시는분들은 지난 4주간의 일일도표 보고 올라가는 장인지 내려가는 장인지 판단하고 long 이나 short 양쪽 방향으로 트레이딩 하는것이 아니라 한 방향 쪽으로만 트레이딩 하셔야 합니다.
        </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Container>
)

export default ThirdPage

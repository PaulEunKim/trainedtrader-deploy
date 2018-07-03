import React from 'react'
import Container from '../components/container.js'
import styles from './index.module.css'
import Link from 'gatsby-link'

const SecondPage = () => (
  <Container>
    <div className={styles.font}>
      <div className={styles.paragraphHeader}>첫번재 - STOP LOSS 세팅 방법</div>
      <div className={styles.paragraph}>이때까지 외환투자나 선물투자에서 손실을 제한하고자 스탑 오더를 넣었지만 스탑만 치고 다시 올라가는 일들이 허다하기 때문에 스탑 오더를 사용하는것보다 스탑 오더와 비슷한 역할을 하는 put or buy option 을 사라입니다.
        많은 분들이 옵션이라고 하면 위험한 투자를 생각하는데 그것은 공매도(short selling)때문에 그런 부정적인 인식이 있는것이고 풋이나 콜을 사는 option 투자는 처음 내는 premium 이라는 금액이 RISK의 전부인 투자 기법입니다.
        외환투자에는 옵션이 없지요, 그래서 외환투자를하시는분은 선물거래구좌도 함께 가지고 계시면서 필요할때에 선물거래구좌에서 currency 선물 마켓에서 해당 currency 옵션을 사면서 그것으로 stop order를 대신하는것입니다.
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Container>
)

export default SecondPage

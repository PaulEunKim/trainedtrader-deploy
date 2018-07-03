import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container.js'
import styles from './index.module.css'

const FourthPage = () => (
  <Container>
   <div className={styles.font}>
      <div className={styles.paragraphHeader}>세번째- Leverage 사용법</div>
        <p>높은Leverage는 독이 될것입니다. 그 어떤 테크닉을 배우기전에, 그 어떤 분석을 하기전 가장 먼저 해야하는것 그리고 앞으로도 계속 지켜야하는것은 본인 어카운트 사이즈 그리고 본인 재정 상태에 맞는 lot size를 정하는것입니다.
        </p>
      <table>
        <tr>
          <th>Amount</th>
          <th>Maximum Position Size</th>
        </tr>
        <tr>
          <td>$2,500</td>
          <td>0.1 Lot</td>
        </tr>
        <tr>
          <td>$5,000</td>
          <td>0.4 Lot</td>
        </tr>
        <tr>
          <td>$10,000</td>
          <td>1.0 Lot</td>
        </tr>
        <tr>
          <td>$25,000</td>
          <td>2.5 Lot</td>
        </tr>
        <tr>
          <td>$100,000</td>
          <td>20.0 Lot</td>
        </tr>
      </table>
     <div className={styles.paragraph}>
      위의 lot size 대로  트레이딩 하시는걸 추천합니다. 여기서 나의 재정 상태는 아주 충분하고 최대한의 RISK를 가지고  싶다 그리고 금방이라도 내돈이 다 없어져도 괜찮다 하시는분들은 위의 lot size 에서 2배까지 하셔도 됩니다.
      기본적으로 지켜져야하지만 많은 사람들이 잘 듣지도 못하고 알지도 못했던 내용들을 적어보았습니다.
     </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Container>
)

export default FourthPage

import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div style={{backgroundColor: 'black'}}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1150,
        padding: '24px 18px 22px 18px',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'Nanum Pen Script',
            fontSize: '74px',
            fontWeight: '200',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header

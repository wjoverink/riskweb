import { css, StyleSheet } from 'aphrodite/no-important'
import React, { Suspense } from 'react'
import Menu from '../../containers/Menu'
import MiniLoader from '../../library/components/miniLoader/MiniLoader'
import PropTypes from 'prop-types'

export const CoreLayout = ({ children }) => (
  <div className={css(styles.mainWrapper)}>
    <Menu />
    <Suspense
      fallback={
        <div className={css(styles.mainWrapper, styles.wrapper)}>
          <MiniLoader />
        </div>
      }
    >
      {children}
    </Suspense>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

const styles = StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  wrapper: {
    minHeight: 600,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CoreLayout

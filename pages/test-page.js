import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import React from 'react'
import { useSpring, animated } from 'react-spring'

export const TimeLineAnimation = () => {
  const animation = {
    config: {
      duration: 2000,
      easing: d3.easeLinear(1),
    },
    from: {
      transform: 'translateX(-300px)',
    },
    to: {
      transform: 'translateX(0px)',
    },
  }
  const [styles] = useSpring(animation)

  return (
    <animated.div style={styles}>
      <p>Slide in text</p>
    </animated.div>
  )
}

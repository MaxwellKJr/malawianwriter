'use client'

import { motion } from 'framer-motion'
import React from 'react'

const PageWrapper = ({ children, className, }: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.div
      initial='initialState'
      animate='animateState'
      exit='exitState'
      variants={{
        initialState: {
          opacity: 0,
          y: 7,
        },
        animateState: {
          opacity: 1,
          y: 0,
        },
        exitState: {
          opacity: 0,
          y: -7,
        }
      }}
    >{children}</motion.div>
  )
}

export default PageWrapper

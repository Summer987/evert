import React, {ReactNode} from "react";

import styles from './button.module.scss'
import clsx from "clsx";

interface IButton {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export const Button: React.FC<IButton> = ({variant = 'primary',children}) => {
  return (
    <>
      <button className={clsx(styles.button, styles[variant])}>
        {children}
      </button>
    </>
  )
}
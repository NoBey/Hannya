import { ReactNode, ButtonHTMLAttributes } from 'react'

import styles from './styles.module.less'

// type ButtonProps = {
//   children: ReactNode;
// } & ButtonHTMLAttributes<HTMLButtonElement>;

function File(){

   return <div className={styles.item}>xxxx.md</div>
}

function Catalog(){

}

export function CatalogTree (props) {
    return <div className={styles.catalogTree}>
        <File />
        <File />
        <File />
    </div>
}

import { Button } from "antd"
import Link from "next/link"
import styles from './Course.module.scss'




export default () => {
    return (
            <div className={styles.main}>
                <Button><Link href={'/'}>მთავარი გვერდი</Link></Button>
            </div>
    )
}
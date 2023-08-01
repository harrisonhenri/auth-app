import { formatUserInfo } from '@utils/format/format-user-info/format-user-info'
import styles from './card-info.module.scss'
import { CardIcon } from '../CardIcon/card-icon'

type IData =
  | ReturnType<typeof formatUserInfo>['personalInfo']
  | ReturnType<typeof formatUserInfo>['financialInfo']
  | ReturnType<typeof formatUserInfo>['jobInfo']
  | ReturnType<typeof formatUserInfo>['physicalInfo']

interface Props {
  data: IData
  iconName: 'user' | 'wallet' | 'health' | 'job'
}

export const CardInfo = ({ data, iconName }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <CardIcon name={iconName} />
      </div>
      <div>
        {data.map(({ label, value }) => (
          <article key={label}>
            <strong>{label}:</strong>
            <p>{value}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

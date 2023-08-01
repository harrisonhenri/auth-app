import { GeneralInfo } from './components/GeneralInfo/general-info'
import styles from './home.module.scss'
import { CardInfo } from './components/CardInfo/card-info'
import { useAppSelector } from '@store/store'
import { userSelector } from '@slices/auth/auth.slice'
import { useGetUserInfoQuery } from '@slices/user-info/user-info.api'
import { Spinner } from '@components/Spinner/spinner'
import { SnackBar } from '@components/Snackbar/snack-bar'
import { parseErrorMessage } from '@utils/http/parse-error-message/parse-error-message'

export const Home = () => {
  const { id } = useAppSelector(userSelector)
  const {
    data: user,
    isLoading: isGettingUserInfo,
    error: gettingUserInfoError,
  } = useGetUserInfoQuery({
    id,
  })

  if (isGettingUserInfo)
    return (
      <div className={styles['spinner--container']}>
        <Spinner variation="secondary" />
      </div>
    )

  return (
    <div className={styles.container}>
      <h4>Home</h4>
      {user && (
        <div className={user ? styles.content__container : ''}>
          <GeneralInfo
            image={user.image}
            fullName={user.fullName}
            maidenName={user.maidenName}
          />
          <div className={styles.content}>
            <div className={styles['personal--info']}>
              <h6>Informações pessoais</h6>
              <CardInfo iconName="user" data={user.personalInfo} />
            </div>
            <div className={styles['financial--info']}>
              <h6>Informações financeiras</h6>
              <CardInfo iconName="wallet" data={user.financialInfo} />
            </div>
            <div className={styles['physical--info']}>
              <h6>Características físicas</h6>
              <CardInfo iconName="health" data={user.physicalInfo} />
            </div>
            <div className={styles['job--info']}>
              <h6>Informações de trabalho</h6>
              <CardInfo iconName="job" data={user.jobInfo} />
            </div>
          </div>
        </div>
      )}
      {gettingUserInfoError && (
        <SnackBar
          type="error"
          text={parseErrorMessage(gettingUserInfoError)}
          open={Boolean(gettingUserInfoError)}
        />
      )}
    </div>
  )
}

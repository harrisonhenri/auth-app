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
    <>
      <h4>Home</h4>
      {user && (
        <div className={user ? styles.container : ''}>
          <GeneralInfo
            image={user.image}
            fullName={user.fullName}
            maidenName={user.maidenName}
          />
          <div className={styles.content__container}>
            <div className={styles['personal--info']}>
              <CardInfo
                iconName="user"
                data={user.personalInfo}
                title="Informações pessoais"
              />
            </div>
            <div className={styles['financial--info']}>
              <CardInfo
                iconName="wallet"
                data={user.financialInfo}
                title="Informações financeiras"
              />
            </div>
            <div className={styles['physical--info']}>
              <CardInfo
                iconName="health"
                data={user.physicalInfo}
                title="Características físicas"
              />
            </div>
            <div className={styles['job--info']}>
              <CardInfo
                iconName="job"
                data={user.jobInfo}
                title="Informações de trabalho"
              />
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
    </>
  )
}

import { IUser } from '@models/user/user'
import {
  formatPersonalInfo,
  isPersonalInfo,
} from '../format-personal-info/format-personal-info'
import {
  formatPhysicalInfo,
  isPhysicalInfo,
} from '../format-physical-info/format-physical-info'
import {
  formatFinancialInfo,
  isFinancialInfo,
} from '../format-financial-info/format-financial-info'
import { formatJobInfo, isJobInfo } from '../format-job-info/format-job-info'

type IFormattedUserInfoItem = { label: string; value: string | number }

interface IFormattedUserInfo
  extends Pick<IUser, 'image' | 'maidenName' | 'id'> {
  personalInfo: IFormattedUserInfoItem[]
  physicalInfo: IFormattedUserInfoItem[]
  financialInfo: IFormattedUserInfoItem[]
  jobInfo: IFormattedUserInfoItem[]
  fullName: string
}

export const formatUserInfo = (user: IUser) => {
  const template = {
    image: user.image,
    fullName: `${user.firstName} ${user.lastName}`,
    id: user.id,
    maidenName: user.maidenName,
    personalInfo: [],
    physicalInfo: [],
    financialInfo: [],
    jobInfo: [],
  }

  return Object.entries(user).reduce<IFormattedUserInfo>(
    (prev, [key, value]) => {
      if (isPersonalInfo(key))
        return {
          ...prev,
          personalInfo: [
            ...prev.personalInfo,
            ...formatPersonalInfo(key, value),
          ],
        }

      if (isPhysicalInfo(key))
        return {
          ...prev,
          physicalInfo: [
            ...prev.physicalInfo,
            ...formatPhysicalInfo(key, value),
          ],
        }

      if (isFinancialInfo(key))
        return {
          ...prev,
          financialInfo: [...prev.financialInfo, ...formatFinancialInfo(value)],
        }

      if (isJobInfo(key))
        return {
          ...prev,
          jobInfo: [...prev.jobInfo, ...formatJobInfo(value)],
        }

      return prev
    },
    template,
  )
}

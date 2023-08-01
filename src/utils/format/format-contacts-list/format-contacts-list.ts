import { IUser } from '@models/user/user'

export const formatContactsList = (list: IUser[]) => {
  const contactsList = list.map(
    ({ id, firstName, lastName, email, phone, image, company }) => ({
      id,
      fullName: `${firstName} ${lastName}`,
      phone,
      image,
      companyName: company.name,
      email,
    }),
  )

  return { contactsList }
}

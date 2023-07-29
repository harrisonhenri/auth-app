import { Input } from '@components/Input/input'
import styles from './auth.module.scss'
import { IAuth } from '@slices/auth/auth.model'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Button } from '@components/Button/button'
import { useSignInMutation } from '@slices/auth/auth.api'
import { formSchema } from './utils/form-schema/form-schema'
import { hasFormErrors } from '@utils/form/has-form-errors/has-form-errors'
import { useState } from 'react'
import { SnackBar } from '@components/Snackbar/snackbar'
import { ButtonContent } from '@components/ButtonContent/button-content'

export const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<IAuth.Request>({
    resolver: yupResolver(formSchema),
  })
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false)

  function openSnackBar() {
    setIsSnackBarOpen(true)
  }

  const [signIn, { isLoading: isSigning }] = useSignInMutation()

  async function onSubmit({ username, password }: IAuth.Request) {
    await signIn({ username, password }).unwrap().catch(openSnackBar)
  }

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h4>Login</h4>
        <Input
          type="text"
          {...register('username')}
          placeholder="Nome de usuário"
          errorMessage={errors.username?.message}
          touched={touchedFields.username}
        />
        <Input
          type="password"
          {...register('password')}
          placeholder="Senha"
          errorMessage={errors.password?.message}
          touched={touchedFields.password}
        />
        <Button
          type="submit"
          disabled={hasFormErrors(errors)}
          loading={isSigning}
          data-testid="login-button"
        >
          <ButtonContent text="Entrar" icon />
        </Button>
        {isSnackBarOpen && (
          <SnackBar
            id="error-snackbar"
            type="error"
            text="Verifique suas credenciais!"
            open={isSnackBarOpen}
          />
        )}
      </form>
    </section>
  )
}

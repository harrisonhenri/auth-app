# CONTRIBUTING

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/harrisonhenri/auth-app/CONTRIBUTING.md)

## Padrões adotados

### Nomenclatura das pastas

As pastas contendo componentes devem ser nomeadas usando o padrão Pascal. As outras pastas devem ser nomeadas usando o padrão kebab case.

### Nomenclatura dos arquivos

Os arquivos devem ser nomeados usando o padrão kebab case.

### Import/export

É recomendado usar exports nomeados.

### Componentes

É recomendado:

- Utilizar componentes funcionais (usando const)
- Isolar efeitos colateirais em hooks

### Estilos

Recomenda-se o uso do padrão BEM.

## Hipóteses

Esse projeto foi construído utilizando-se o [dummy json](https://dummyjson.com/) como backend seguindo as hipóteses abaixo:

- Esta API não possui um refreshToken (e aparentemente que o token não é validado), então, [esse snippet](https://github.com/harrisonhenri/auth-app/blob/master/src/services/http/axios.ts#L39) tenta simular esse fluxo
- Aparentemente esta api não retorna os dados dos usuários com base no token, portanto, o aplicativo obtém os dados do usuário com uma solicitação get http usando o id como parâmetro de rota [conforme apresentado aqui](https://github.com/harrisonhenri/auth-app/blob/master/src/features/slices/user-info/user-info.api.ts#L8). Idealmente, essa consulta não seria necessária (a api já poderia retornar todo o perfil do usuário no login) ou feita apenas usando a sessão do usuário (sem o id)
- O ambiente de desenvolvimento inicializa com alguns dados mockados [conforme apresentado aqui](https://github.com/harrisonhenri/auth-app/blob/master/src/features/slices/contacts-list/contacts-list.slice.ts#L11).

### Git patterns

Para mais informações, por favor visite o [site do Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## 📚 Organização do projeto

```
├── src
│   ├── __tests__                   <- Diretório que contém a suite de tests
│   ├── components                  <- Diretório que contém alguns componentes globais (componentes compartilhados ao longo do projeto)
│   ├── config                      <- Diretório que contém algumas configurações e variáveis de ambiente
│   ├── features                    <- Módulo contendo as features da app
│   │   ├── app
│   │       ├── utils               <- Contém alguns utils locais
│   │       ├── components          <- Contém alguns componentes locais
│   │   ├── slices                  <- Diretório contendo os slices das features (seguindo o padrão do Redux Rtk)
│   ├── hooks                       <- Módulo contendo os hooks da app
│   ├── model                       <- Diretório que contém o domínio da app
│   ├── routes                      <- Diretório que contém as rotas da app
│   │   ├── private-route.tsx       <- Wrapper para rotas privadas
│   │   ├── routes.model.ts         <- Local dedicado para registros das rotas da app
│   │   ├── routes.tsx              <- Componente que constroi as rotas da app
│   ├── services                    <- Diretório que contém alguns services da app (axios, fetch, etc.)
│   ├── store                       <- Diretório que contém a store da app
│   ├── styles                      <- Diretório que contém algumas definições de estilo
│   ├── utils                       <- Diretório que contém alguns helpers da app


```

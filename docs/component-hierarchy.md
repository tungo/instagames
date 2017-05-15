## Component Hierarchy

**AuthFormContainer**
- AuthForm
- Error

**HomeContainer**
- Navbar
  + Search
  + Upload
- Photo
  + Like
  + Comment

**UserContainer**
- Avatar
- Follow
  + FollowDetail
- PhotoDetail
  + Like
  + Comment

**UserEditContainer**
- Avatar
- UserForm

## Route

Path               | Components
-------------------|--------------------
`/sign-up`         | `AuthFormContainer`
`/sign-in`         | `AuthFormContainer`
`/`                | `HomeContainer`
`/users/:username` | `UserContainer`
`/users/edit`      | `UserEditContainer`

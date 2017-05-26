## Component Hierarchy

**AuthFormContainer**
- AuthForm

**PageContainer**
- Nav
  + SearchForm
  + UploadForm
- Feed
- Profile
- Account

**FeedContainer**
- Photo
  + Like
  + Comment
    - CommentIndex
    - CommentForm
- Users

**ProfileContainer**
- AvatarForm
- FollowIndex
  + FollowItem
- PhotoIndex
- PhotoDetail
  + Like
  + Comment
    - CommentIndex
    - CommentForm

**AccountContainer**
- AvatarForm
- Account
  + EditForm
  + PasswordForm

**OtherComponents**
- ConfirmModal
- Loading

## Route

Path                | Components
--------------------|----------------------------------------------------
`/signup`           | `AuthFormContainer`
`/login`            | `AuthFormContainer`
`/`                 | `PageContainer`, `FeedContainer`
`/users/:username`  | `PageContainer`, `ProfileContainer`
`/account/edit`     | `PageContainer`, `AccountContainer`, `EditForm`
`/account/password` | `PageContainer`, `AccountContainer`, `PasswordForm`

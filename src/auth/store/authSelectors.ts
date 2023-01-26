import { createSelector } from 'reselect'
import { RootState } from 'app/store/store'

const selectAuth = (state: RootState) => state.auth

export const selectToken = createSelector(
    selectAuth,
    auth => auth.myProfile?.token
)

export const selectMyProfile = createSelector(
    selectAuth,
    auth => auth.myProfile
)
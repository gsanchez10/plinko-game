// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { ref, set } from 'firebase/database'
import { produce } from 'immer'
// import { auth, database } from 'lib/firebase'
import toast from 'react-hot-toast'
// import { random } from 'utils/random'
import create from 'zustand'

interface User {
  id: string
  name: string
  email: string
  profilePic?: string
  balance: number
  maxBet: number
  limitReachedMessage?: string
}

interface Wallet {
  balance: number
}

interface State {
  user: User
  wallet: Wallet
  isAuth: boolean
  signIn: (token: string, loadingState?: string) => Promise<void>
  // signOut: () => Promise<void>
  setUser: (user: User) => void
  isAuthLoading: boolean
  isRefreshingData: boolean
  isWalletLoading: boolean
  setBalance: (balance: number) => void
  incrementBalance: (token: string, amount: number) => Promise<void>
  decrementBalance: (token: string, amount: number) => Promise<void>
}

function storeUser(user: User) {
  localStorage.setItem('uid', user.id)
  localStorage.setItem('name', user.name)
  localStorage.setItem('profilePic', user.profilePic || '')
}

// function clearUser() {
//   localStorage.removeItem('uid')
//   localStorage.removeItem('name')
//   localStorage.removeItem('profilePic')
// }

const userInitialState: User = {
  id: '',
  name: '',
  email: '',
  balance: 0,
  maxBet: 0
}

const walletInitialState: Wallet = {
  balance: 0
}

const IS_REFRESHING_DATA = 'isRefreshingData'

// export const useAuthStore = create<State>((setState, getState) => ({
export const useAuthStore = create<State>((setState, getState) => ({
  user: userInitialState,
  wallet: walletInitialState,
  isAuthLoading: false,
  isRefreshingData: false,
  isWalletLoading: false,
  isAuth: false,
  setBalance: (balance: number) => {
    try {
      setState(
        produce<State>(state => {
          state.wallet.balance = balance
          state.isWalletLoading = false
        })
      )
    } catch (error) {
      toast.error('Ocorreu um erro ao atualizar o saldo')
      console.error('setBalanceError', error)
    }
  },
  incrementBalance: async (token: string, amount: number) => {
    try {
      setState(state => ({ ...state, isWalletLoading: true }))
      const refreshUser = getState().signIn
      await fetch('/api/insertPlayerTransaction', {
        method: 'POST',
        body: JSON.stringify({ token, amount }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setState(state => ({
        ...state,
        isWalletLoading: false,
        user: { ...state.user, balance: state.user.balance + amount }
      }))
      await refreshUser(token, IS_REFRESHING_DATA)
    } catch (error) {
      toast.error('Ocorreu um erro ao atualizar o saldo')
      console.error('incrementBalanceError', error)
    }
  },
  decrementBalance: async (token: string, amount: number) => {
    try {
      setState(state => ({ ...state, isWalletLoading: true }))
      const refreshUser = getState().signIn
      // await getState().setBalanceOnDatabase(getState().wallet.balance - amount)
      await fetch('/api/insertPlayerTransaction', {
        method: 'POST',
        body: JSON.stringify({ token, amount: -amount }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setState(state => ({
        ...state,
        isWalletLoading: false,
        user: { ...state.user, balance: state.user.balance - amount }
      }))
      await refreshUser(token, IS_REFRESHING_DATA)
    } catch (error) {
      toast.error('Ocorreu um erro ao atualizar o saldo')
      console.error('decrementBalanceError', error)
    }
  },
  signIn: async (token: string, loadingState = 'isAuthLoading') => {
    if (!token) return
    try {
      setState(state => ({ ...state, [loadingState]: true }))
      try {
        const response = await fetch(`/api/fetchData?token=${token}`, {
          method: 'POST'
        })
        const user = await response.json()
        if (response.ok) {
          storeUser(user)
          setState(
            produce<State>(state => {
              state.user = user
              state.isAuth = true
              state.wallet.balance = user.balance
              state.user.maxBet = user.maxBet
            })
          )
        }
      } catch (error) {
        console.error('Error getting player balance:', error)
      }
      setState(state => ({ ...state, [loadingState]: false }))
    } catch (error) {
      toast.error('Ocorreu um erro ao fazer login')
      console.error('signInError', error)
    }
  },
  // signOut: async () => {
  //   try {
  //     setState(state => ({ ...state, isAuthLoading: true }))
  //     await auth.signOut()
  //     clearUser()
  //     setState(
  //       produce<State>(state => {
  //         state.user = userInitialState
  //         state.isAuth = false
  //         state.isAuthLoading = false
  //       })
  //     )
  //   } catch (error) {
  //     toast.error('Ocorreu um erro ao fazer logout')
  //     console.error('signOutError', error)
  //   }
  // },
  setUser: (user: User) => {
    try {
      setState(
        produce<State>(state => {
          state.user = user
          state.isAuth = true
          state.isAuthLoading = false
        })
      )
    } catch (error) {
      toast.error('Ocorreu um erro ao atualizar os dados do usuário')
      console.error('setUserError', error)
    }
  }
}))

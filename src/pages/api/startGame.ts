import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const getLimitMessage = (
  isMinesMaxDailyWinLimitReached: boolean,
  isMinesMaxDailyLossLimitReached: boolean,
  isMinesMaxWeeklyWinLimitReached: boolean,
  isMinesMaxWeeklyLossLimitReached: boolean
) => {
  if (isMinesMaxDailyWinLimitReached) {
    return 'Max Daily Win Limit'
  } else if (isMinesMaxDailyLossLimitReached) {
    return 'Max Daily Loss Limit'
  } else if (isMinesMaxWeeklyWinLimitReached) {
    return 'Max Weekly Win Limit'
  } else if (isMinesMaxWeeklyLossLimitReached) {
    return 'Max Weekly Loss Limit'
  }
  return ''
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.query
  const url = process.env.BET_MASTER_API_URL + '/PlayerExt/GetPlayerInfo'
  try {
    const response = await axios.post(url, null, {
      headers: { Authorization: `Token ${token}` }
    })
    const {
      IsMinesMaxDailyWinLimitReached,
      IsMinesMaxDailyLossLimitReached,
      IsMinesMaxWeeklyWinLimitReached,
      IsMinesMaxWeeklyLossLimitReached,
      MaxBetMines: maxBet
    } = response.data
    const isLimitReached =
      IsMinesMaxDailyWinLimitReached ||
      IsMinesMaxDailyLossLimitReached ||
      IsMinesMaxWeeklyWinLimitReached ||
      IsMinesMaxWeeklyLossLimitReached
    const user = {
      balance: response.data.Available,
      player: response.data.Player,
      isLimitReached,
      maxBet,
      limitReachedMessage: getLimitMessage(
        IsMinesMaxDailyWinLimitReached,
        IsMinesMaxDailyLossLimitReached,
        IsMinesMaxWeeklyWinLimitReached,
        IsMinesMaxWeeklyLossLimitReached
      )
    }
    res.status(200).json(user)
  } catch (error) {
    console.error('Error getting player balance:', error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}

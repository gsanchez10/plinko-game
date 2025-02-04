import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const getLimitMessage = (
  isPlinkoMaxDailyWinLimitReached: boolean,
  isPlinkoMaxDailyLossLimitReached: boolean,
  isPlinkoMaxWeeklyWinLimitReached: boolean,
  isPlinkoMaxWeeklyLossLimitReached: boolean
) => {
  if (isPlinkoMaxDailyWinLimitReached) {
    return 'Max Daily Win Limit'
  } else if (isPlinkoMaxDailyLossLimitReached) {
    return 'Max Daily Loss Limit'
  } else if (isPlinkoMaxWeeklyWinLimitReached) {
    return 'Max Weekly Win Limit'
  } else if (isPlinkoMaxWeeklyLossLimitReached) {
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
      IsPlinkoMaxDailyWinLimitReached,
      IsPlinkoMaxDailyLossLimitReached,
      IsPlinkoMaxWeeklyWinLimitReached,
      IsPlinkoMaxWeeklyLossLimitReached,
      MaxBetPlinko: maxBet
    } = response.data
    const isLimitReached =
      IsPlinkoMaxDailyWinLimitReached ||
      IsPlinkoMaxDailyLossLimitReached ||
      IsPlinkoMaxWeeklyWinLimitReached ||
      IsPlinkoMaxWeeklyLossLimitReached
    const user = {
      balance: response.data.Available,
      player: response.data.Player,
      isLimitReached,
      maxBet,
      limitReachedMessage: getLimitMessage(
        IsPlinkoMaxDailyWinLimitReached,
        IsPlinkoMaxDailyLossLimitReached,
        IsPlinkoMaxWeeklyWinLimitReached,
        IsPlinkoMaxWeeklyLossLimitReached
      )
    }
    res.status(200).json(user)
  } catch (error) {
    console.error('Error getting player balance:', error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}

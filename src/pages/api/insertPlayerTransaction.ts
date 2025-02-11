import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { amount, token } = req.body
  const description = amount >= 0 ? 'winnings' : 'loss'

  const reference = 'PLINKO'

  const url =
    process.env.BET_MASTER_API_URL + '/PlayerExt/InsertPlayerTransaction'

  const data = {
    Reference: reference,
    Amount: amount,
    Description: description
  }

  try {
    const response = await axios.post(url, data, {
      headers: { Authorization: `Token ${token}` }
    })
    res.status(200).json(response.data)
  } catch (error) {
    console.error('Error inserting player transaction:', error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
  res.status(200).json({ ok: true })
}

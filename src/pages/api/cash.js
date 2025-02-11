import fs from 'fs'

export default (req, res) => {
  fs.rmSync(req.body.what, { recursive: true, force: true })

  res.send({ ok: true })
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const runMiddleware = req => new Promise((resolve) => {

  setTimeout(() => {

    console.log(req.url)
    resolve()

  }, 5000)

})

export default async (req, res) => {

  await runMiddleware(req)

  res.status(200).json({ name: 'John Doe - Maneiro' })
}

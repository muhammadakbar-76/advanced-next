// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setPreviewData({something: "anjay"}); //_next_preview_data same as jwt token, _prerendered_bypass just random string
  res.status(200).json({ name: 'John Doe' });
}

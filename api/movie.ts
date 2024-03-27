import fetch from "node-fetch"
import { VercelRequest, VercelResponse } from '@vercel/node'

const { APIKEY } = process.env

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const { title, page, id } = JSON.parse(request.body)
  const url = id
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`//영화의 목록과 상세 정보를 동시에 처리하는 로직

  const res = await fetch(url)
  const json = await res.json()
  response
    .status(200) //네트워크에서 정상적으로 응답할 때 값을 200으로 적어준다. 즉, 200=네트워크의 사애 코드. 정상적인 응답.
    .json(json)
}
//이 함수는 브라우저가 아니라 버셀 패키지가 동작하는 node.js 환경이다.
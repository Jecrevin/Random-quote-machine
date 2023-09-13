import React from 'react'
import Link from 'next/link'
import QuoteBox from './quoteBox'
import { Work_Sans } from 'next/font/google'
import { getQuotes, getRamdomQuote, getRandomColor } from './source'

const workSans = Work_Sans({
  subsets: ['latin']
})

export default async function Home (): Promise<React.JSX.Element> {
  const initColor = getRandomColor()
  try {
    const quotes = await getQuotes()
    const firstQuote = getRamdomQuote(quotes)
    return (
      <main className="w-screen h-screen flex justify-center items-center flex-col"
        id="background" style={{ backgroundColor: initColor }}>
        <QuoteBox quotes={quotes} quote={firstQuote[0]} author={firstQuote[1]}
          initColor={initColor} />
        <p id="web-author" className={'text-white' + ' ' + workSans.className}>
          by <Link href={'https://www.freecodecamp.org/chinese/Jecrevin'}
            id="author-link" className="font-medium">Jecrevin</Link>
        </p>
      </main>
    )
  } catch (error) {
    return (
      <div className="w-screen h-screen bg-red-400 flex items-center justify-center">
        <div>
          <p className="my-auto text-3xl text-lime-200 text-center mb-3">
            No Quotes available:(
          </p>
          <p className="my-auto text-lime-50 font-thin text-xs text-center">
            Press F5 to try again
          </p>
        </div>
      </div>
    )
  }
}

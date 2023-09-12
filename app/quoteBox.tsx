'use client'

import { useState } from "react";
import Link from "next/link";
import { getRamdomQuote, getRandomColor } from "./source";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"]
})

export default function QuoteBox(
  props: { quote: string, author: string, quotes: Array<{ quote: string, author: string }>, initColor: string }
) {
  const [quote, setQuote] = useState(props.quote);
  const [author, setAuthor] = useState(props.author);

  function getNewQuote() {
    const text = document.getElementById("text")!;
    text.style.color = "transparent";
    const author = document.getElementById("author")!;
    author.style.color = "transparent";

    const nextColor = getRandomColor();
    setTimeout(() => {
      const newQuote = getRamdomQuote(props.quotes);
      setQuote(newQuote[0]);
      setAuthor(newQuote[1]);
      setColorById("text", nextColor);
      setColorById("author", nextColor);
    }, 500);
    setColorById("tweet-quote", nextColor);
    setBackgroundColorById("new-quote", nextColor);
    setBackgroundColorById("background", nextColor);
  }

  return (
    <div id="quote-box" className="h-fit rounded bg-white px-10 py-5">
      <p id="text" className="w-full text-center text-xl mb-5" style={{ color: props.initColor }}>
        {quote}
      </p>
      <p id="author" className="w-full text-right text-xs font-light"
        style={{ color: props.initColor }}>
        {'- ' + author}
      </p>
      <div className="flex justify-between mt-4 items-center">
        <span>
          <Link id="tweet-quote" href={"https://twitter.com/intent/tweet"}
            style={{ color: props.initColor }} className="flex items-center">
            <FontAwesomeIcon icon={faSquareTwitter} style={{ color: "inherit" }} />
          </Link>
        </span>
        <button className={"rounded px-2 py-1 text-white" + ' ' + workSans.className}
          id="new-quote" onClick={getNewQuote} style={{ backgroundColor: props.initColor }}>
          New quote
        </button>
      </div>
    </div>
  )
}

export function setColorById(id: string, color: string) {
  if (!document.getElementById(id)) return;
  document.getElementById(id)!.style.color = color;
}

export function setBackgroundColorById(id: string, color: string) {
  if (!document.getElementById(id)) return;
  document.getElementById(id)!.style.backgroundColor = color;
}

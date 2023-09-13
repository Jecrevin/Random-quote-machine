export const colors = [
  '#6b7280',
  '#57534e',
  '#ef4444',
  '#fb923c',
  '#fcd34d',
  '#facc15',
  '#a3e635',
  '#22c55e',
  '#22d3ee',
  '#0ea5e9',
  '#2563eb',
  '#8b5cf6',
  '#7e22ce',
  '#ec4899',
  '#f43f5e'
]

export function getRandomColor (): string {
  return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * Fetch quotes data from website.
 * @returns An array containing objects, each object is made of quote and its author.
 */
export async function getQuotes (): Promise<Array<{ quote: string, author: string }>> {
  const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  if (!response.ok) {
    throw new Error()
  }
  const quotesData: { quotes: Array<{ quote: string, author: string }> } =
    await response.json()
  return quotesData.quotes
}

/**
 *
 * @param quotesData An array containing quotes, which is from the function getQuotes()
 * @returns a two element array where the first is quote,
 *          the other is the corresonding author.
 */
export function getRamdomQuote (quotesData: Array<{ quote: string, author: string }>): string[] {
  const index = Math.floor(Math.random() * quotesData.length)
  return [quotesData[index].quote, quotesData[index].author]
}

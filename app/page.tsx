import Image from 'next/image'
import img001 from 'files/001/108-bigger.png'


const books = [
  {
    name: "108 Maidens of Destiny",
    author: "She's Cold as Ice",
    translators: [
      {
        name: "The Sun Is Cold Translations",
        home: "https://thesuniscold.translatednovels.com/",
      },
      {
        name: "Amery Edge Teasers Translations",
        home: "https://ameryedge.com/",
      },
    ],
    coverImagePath: img001,
    filePath:
      "/files/001/108 Maidens of Destiny - 她酷像冰 (She’s Cold As Ice).epub",
    plot: `“Your servant is Majestic Star ‘Panther Head’ Lin Chong, from this day forward I am your woman!”\n
When the beautiful and heroic young girl in front of him shouted those heaven shattering words, Su Xing was overwhelmed with shock.\n
And so the tale of the 108 maidens of destiny from legends begins.\n
In Liangshan Continent, a genius is defined as a Star Master who is capable of signing the Star Duel Covenant contract with two Star Maidens. This was truly the limit.\n
But right now Su Xing’s dilemma is how to convince the “Strength Star” Lu Junyi to become his eighth Star Knight. And this is just the beginning…`,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="cardholder">
        {books.map((book, id) => {
          return (
            <div
              id="card"
              key={id}
              className="p-4 border rounded-lg shadow-md w-96 text-center"
            >
              <h2 className="text-3xl font-semibold">{book.name}</h2>
              <p className="text-gray-600">Author: {book.author}</p>
              <div className="mt-4 w-full">
                <Image
                  unoptimized
                  src={book.coverImagePath}
                  alt={book.name}
                  className="mx-auto rounded-lg "
                />
              </div>
              <p className="mt-4 whitespace-pre-line text-justify">
                {book.plot}
              </p>
              <div className="mt-4">
                <p className="font-semibold">Translators:</p>
                {book.translators.map((translator, id) => (
                  <div key={id} className="mt-2">
                    <a
                      href={translator.home}
                      className="text-blue-500 hover:underline"
                    >
                      {translator.name}
                    </a>
                  </div>
                ))}
              </div>
              <div>
                <a
                  href={book.filePath}
                  download
                  className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Download Book
                </a>
              </div>
            </div>
          );
        })}
      </div>
        
    </main>
  )
}

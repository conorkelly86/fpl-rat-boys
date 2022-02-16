import Head from "next/head";
import Image from "next/image";
import winners from "./winners.json";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="FPL Rat Boys Hall Of Fame" />
        <title>FPL Rat Boys Hall Of Fame</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/styles/globals.css" rel="stylesheet"></link>
      </Head>
      <main className="grid min-h-screen bg-gradient-to-t from-blue-200 to-blue-400 lg:pr-20% lg:pl-20%">
        <span className="lg:text-8xl md:text-2xl sm:text-2xl text-center text-white">
          🐀 <br></br>The FPL Rat Boys <br></br>🐀 Hall Of Fame 🐀
        </span>
        <div className=" lg:pb-60 flex flex-col justify-center sm:py-12 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-2">
            {winners.map((winner, key) => (
              <div
                className="relative flex flex-col min-w-0 break-words bg-gradient-to-t from-gray-900 to-gray-600  w-full shadow-xl rounded-lg text-center"
                key={winner.phase}
              >
                <span className="text-2xl mt-10 text-white">
                  {winner.season}
                </span>
                <span className="text-sm m-2 text-white">
                  Phase: {winner.phase}
                </span>
                <div className="text-center mt-6 ">
                  <p className="text-6xl">🐀</p>
                  <span className="text-xl font-semibold leading-normal text-gold ">
                    {winner.first}
                  </span>
                  <p className="mb-6 text-white">{winner.firstPoints}</p>
                  {winner.second && <span className="text-5xl">🥈</span>}
                  <h4 className="text-m font-semibold leading-normal text-silver ">
                    {winner.second}
                  </h4>
                  <p className="mb-6 text-white">{winner.secondPoints}</p>
                  {winner.third && <span className="text-4xl">🥉</span>}
                  <h5 className="text-sm font-semibold leading-normal text-bronze ">
                    {winner.third}
                  </h5>
                  <p className="mb-6 text-white">{winner.thirdPoints}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  );
}

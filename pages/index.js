import Head from "next/head";
import Image from "next/image";
import winners from "./winners.json";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/styles/globals.css" rel="stylesheet"></link>
      </Head>
      <main className="grid min-h-screen bg-gradient-to-t from-blue-200 to-gray-800 lg:pr-20% lg:pl-20%">
        <span className="lg:text-8xl md:text-2xl sm:text-2xl text-center text-white">
          🐀 <br></br>The FPL Rat Boys <br></br>🐀 Hall Of Fame 🐀
        </span>
        <div className=" lg:pb-60 flex flex-col justify-center sm:py-12 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-2">
            {winners.map((winner, key) => (
              <div
                className="relative flex flex-col min-w-0 break-words bg-gradient-to-r from-gray-100 to-gray-300 w-full shadow-xl rounded-lg text-center"
                key={winner.phase}
              >
                <span className="text-2xl mt-10">{winner.season}</span>
                <span className="text-sm m-2">Phase: {winner.phase}</span>
                <div className="text-center mt-6 ">
                  <p className="text-6xl">🐀</p>
                  <span className="text-xl font-semibold leading-normal text-gold ">
                    {winner.first}
                  </span>
                  <p className="mb-6">{winner.firstPoints}</p>
                  {winner.second && <span className="text-5xl">🥈</span>}
                  <h4 className="text-m font-semibold leading-normal text-silver ">
                    {winner.second}
                  </h4>
                  <p className="mb-6">{winner.secondPoints}</p>
                  {winner.third && <span className="text-4xl">🥉</span>}
                  <h5 className="text-sm font-semibold leading-normal text-bronze ">
                    {winner.third}
                  </h5>
                  <p className="mb-6">{winner.thirdPoints}</p>
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

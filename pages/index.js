import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaSpotify,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const twitter = {
  name: "Twitter",
  url: "https://twitter.com/jordicapellad3s",
  color: "bg-[#219bf0]",
};

const github = {
  name: "Github",
  url: "https://github.com/jordicapellad3s",
  color: "bg-[#254f1a]",
};

const instagram = {
  name: "Instagram",
  url: "https://www.instagram.com/jordicapelladesedo/",
  color: "bg-[#780416]",
};

const Twitter = ({ name, url, color }) => {
  console.log(color);
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div
        className={`relative ${color} w-50 h-28 border rounded-3xl flex flex-col justify-end items-start p-5`}
      >
        <span className="absolute top-0 left-0 p-5">
          <FaTwitter className="w-6 h-6 text-white" />
        </span>
        <span className="absolute top-0 right-0 p-5">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </span>
        <h1 className="text-xl font-bold text-white">{name}</h1>
      </div>
    </Link>
  );
};

const Github = ({ name, url, color }) => {
  console.log(color);
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div
        className={`relative ${color} w-50 h-28 border rounded-3xl flex flex-col justify-end items-start p-5`}
      >
        <span className="absolute top-0 left-0 p-5">
          <FaGithub className="w-6 h-6 text-[#d2e823]" />
        </span>
        <span className="absolute top-0 right-0 p-5">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-[#d2e823]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </span>
        <h1 className="text-xl font-bold text-[#d2e823]">{name}</h1>
      </div>
    </Link>
  );
};

const Instagram = ({ name, url, color }) => {
  console.log(color);
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div
        className={`relative ${color} w-50 h-28 border rounded-3xl flex flex-col justify-end items-start p-5`}
      >
        <span className="absolute top-0 left-0 p-5">
          <FaInstagram className="w-6 h-6 text-[#e9c0e9]" />
        </span>
        <span className="absolute top-0 right-0 p-5">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-[#e9c0e9]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </span>
        <h1 className="text-xl font-bold text-[#e9c0e9]">{name}</h1>
      </div>
    </Link>
  );
};

export default function Home({ twitter }) {
  console.log(twitter.name);
  return (
    <>
      <Head>
        <title>Links</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col max-w-md mx-auto text-center">
        <header className="flex flex-col items-center justify-center gap-2 mt-20 mb-10">
          <Image
            src="https://pbs.twimg.com/profile_images/1613579628488134656/ubVI7wGd_400x400.jpg"
            alt="Jordi Capellades"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold">@jordicapellad3s</h1>
        </header>
        <section className="flex flex-col gap-4">
          <Twitter
            name={twitter.name}
            color={twitter.color}
            url={twitter.url}
          />
          <Github name={github.name} color={github.color} url={github.url} />
          <Instagram
            name={instagram.name}
            color={instagram.color}
            url={instagram.url}
          />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      twitter,
    },
  };
}

import About, { generateMetadata } from "./about/page";

export { generateMetadata };

export default function Home() {
  return <About />;
}
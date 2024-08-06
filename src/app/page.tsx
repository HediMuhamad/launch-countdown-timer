import dynamic from "next/dynamic";

const CountDown = dynamic(() => import("@/components/count-down"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <CountDown />
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-8" aria-label="Pontus Pro">
      <Image
        src="/logo.png"
        alt="Pontus Pro logo"
        width={220}
        height={220}
        priority
        className="h-auto w-[min(56vw,220px)]"
      />
    </main>
  );
}

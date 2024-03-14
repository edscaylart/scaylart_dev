import clsx from "clsx";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex h-full flex-col justify-center gap-4 px-8">
      <div className="flex items-center space-x-4">
        <div
          className={clsx(
            "rounded-full bg-gradient-to-tl from-background-100 to-background-600 shadow-lg",
            "p-[3px] ring-[5px] ring-background-300",
          )}
        >
          <div className={clsx("h-24 w-24 rounded-full p-px")}>
            <Image
              src="https://avatars.githubusercontent.com/u/770032?v=4"
              alt="A picture of Edson"
              priority
              className="rounded-full"
              width={96}
              height={96}
            />
          </div>
        </div>
        <div>
          <h1 className="flex text-3xl font-bold">Edson Souza</h1>
          <h3 className="flex text-xl font-bold">Software Engineer</h3>
        </div>
      </div>
      <p className="text-base">
        I am a developer, living in the interior of Mato Grosso, Brazil. I enjoy
        venturing into various languages to solve problems, or just to study or
        test some crazy idea.
      </p>
    </div>
  );
}

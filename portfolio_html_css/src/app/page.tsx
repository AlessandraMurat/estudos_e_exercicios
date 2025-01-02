import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <section className="grid grid-cols-1 lg:grid-cols-2 h-screen px-6 md:px-20 gap-y-10 gap-x-10">
        <div className="flex flex-col justify-center">
          <h1
            className="text-4xl font-krona text-white"
            style={{ lineHeight: "56px" }}
          >
            Eleve seu negócio digital a outro nível{" "}
            <strong className="text-primary">
              com um Front-end de qualidade!
            </strong>
          </h1>
          <p className="text-xl my-10 text-white">
            Olá! Sou Joana Santos, desenvolvedora Front-end com especialidade em
            React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem
            em prática boas ideias. Vamos conversar?
          </p>
          <div className="w-full flex flex-col lg:flex-row gap-8">
            <Button
              link="https://www.linkedin.com/in/alessandramurat/"
              text="Linkedin"
            />
            <Button
              color="secondary"
              link="https://github.com/AlessandraMurat"
              text="Github"
            />
          </div>
        </div>
        <div className="w-full hidden lg:flex justify-center lg:justify-end items-center">
          <Image
            src="/assets/images/image.png"
            alt="Imagem de uma mulher programando"
            width={488}
            height={550}
          />
        </div>
      </section>
    </main>
  );
}

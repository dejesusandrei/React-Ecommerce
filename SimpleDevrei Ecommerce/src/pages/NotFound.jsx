import { Header } from "../components/Header";

export function NotFound(){
  return(
      <>
        <title>404 Page Not Found</title>
        <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

        <Header />

        <main className="mt-18">
          <section className="w-full">
            <div className="h-dvh max-w-125 lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="w-[512px] h-[512px] bg-amber-200 rounded"> gaga</div>
              </div>
            </div>
          </section>
        </main>
      </>
  );
}
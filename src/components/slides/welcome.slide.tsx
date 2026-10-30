export function WelcomeSlide() {
    return (
        <>
            <div className="relative isolate flex h-full w-full flex-col items-center justify-center bg-secondary/25 backdrop-blur-2xl">

            <div className="relative z-10 flex w-full max-w-350 flex-col gap-xl px-20">
                <div className="flex w-full flex-col overflow-hidden">
                    <h1 className="relative left-1/2 m-0 w-fit -translate-x-1/2 p-0 text-6xl font-black uppercase leading-none tracking-tighter transition-all md:left-0 md:translate-x-0 md:text-8xl lg:text-[10rem]">
                        Blank<span className="pl-md text-xl">©</span>
                    </h1>
                    <h2 className="relative left-1/2 m-0 w-fit -translate-x-1/2 text-xl font-extrabold leading-none tracking-tight text-text-muted transition-all md:left-0 md:-mt-1 md:translate-x-0 md:px-8 md:text-2xl lg:-mt-2 lg:text-[2rem]">
                        Off the path.
                    </h2>
                </div>

                <div className="flex w-full justify-center md:justify-end">
                    <p className="max-w-120 text-center text-text-muted md:text-right">
                        The Blank Ecosystem, a project centered on absolute order,
                        precision, and the dematerialization of the superfluous. An
                        austere, timeless proposal designed through the logic of the
                        void, speed, and pure sobriety.
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}
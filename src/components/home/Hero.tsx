import Image from "next/image";

export default function Hero() {

    return (
        <div className="relative isolate overflow-hidden pt-14 ">
            <Image
                src="/hero.jpg"       // ścieżka do obrazu w folderze /public
                alt="Hero image"      // opis dla SEO i dostępności
                fill                   // wypełnia cały rodzicielski kontener
                className="absolute inset-0 -z-10 size-full object-cover"
            />
            <div className={"absolute inset-0 bg-black/70"}/>
            {/*<img*/}
            {/*    alt=""*/}
            {/*    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=fff&sat=-100&exp=15&blend-mode=overlay"*/}
            {/*    className="absolute inset-0 -z-10 size-full object-cover opacity-10 dark:hidden"*/}
            {/*/>*/}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-black opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 bg-red500">
                    {/*<div className="hidden sm:mb-8 sm:flex sm:justify-center">*/}
                    {/*    <div*/}
                    {/*        className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">*/}
                    {/*        Announcing our next round of funding.{' '}*/}
                    {/*        <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400">*/}
                    {/*            <span aria-hidden="true" className="absolute inset-0"/>*/}
                    {/*            Read more <span aria-hidden="true">&rarr;</span>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
                            Prawo dla biznesu. Rozwiązania dla ludzi.
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
                            Oferujemy kompleksową obsługę prawną osób fizycznych i przedsiębiorców.
                            Naszym celem jest zapewnienie bezpieczeństwa prawnego i skutecznej ochrony Twoich
                            interesów.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                            >
                                Oferta dla firm
                            </a>
                            <a href="#" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs inset-ring-2 inset-ring-accent hover:text-accent transition-colors">
                                Oferta dla klientów
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div*/}
            {/*    aria-hidden="true"*/}
            {/*    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"*/}
            {/*>*/}
            {/*    <div*/}
            {/*        style={{*/}
            {/*            clipPath:*/}
            {/*                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',*/}
            {/*        }}*/}
            {/*        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    )
}
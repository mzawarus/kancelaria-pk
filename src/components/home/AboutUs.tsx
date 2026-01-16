import OurTeam from "@/components/home/OurTeam";

const stats = [
    {label: 'Transactions every 24 hours', value: '44 million'},
    {label: 'Assets under holding', value: '$119 trillion'},
    {label: 'New users annually', value: '46,000'},
]
export default function AboutUs() {
    return (
        <div className="bg-white pt-20 px-4 lg:px-8">
            <div className="mx-auto max-w-7xl text-base/7 text-gray-700 px-2 md:px-8">
                <p className="text-base/7 font-semibold text-accent">O nas</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl/13">
                    Profesjonalna obsługa prawna firm - <br/> Kancelaria Radców Prawnych Paprzyca & Kułaga
                </h1>
                <p className="mt-6 text-xl/8 max-w-4xl text-justify">
                    <strong>Kancelaria Radców Prawnych Wojciech Paprzyca, Marcin Kułaga Spółka
                        Cywilna</strong> gwarantuje najwyższy standard obsługi prawnej dla biznesu. Nasz zespół tworzą
                    ambitni eksperci, dla których priorytetem jest skuteczność oraz pełna satysfakcja Klienta z
                    podejmowanych przez nas działań.
                </p>
                <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                    Kompleksowa pomoc prawna dla przedsiębiorców
                </h2>
                <div className="mt-10 max-w-2xl text-gray-600">
                    <p>
                        Specjalizujemy się w <strong>kompleksowej obsłudze prawnej przedsiębiorców
                        indywidualnych</strong>, spółek osobowych oraz spółek prawa handlowego. Dzięki doświadczeniu
                        zdobytemu od 2005 roku, zapewniamy bezpieczeństwo prawne na każdym etapie prowadzenia
                        działalności.
                    </p>
                </div>
                <p className="mb-4 leading-relaxed">
                    Choć główna siedziba naszej Kancelarii mieści się w <strong>Oświęcimiu</strong>, skutecznie
                    wspieramy przedsiębiorców w całym regionie. Nasza oferta skierowana jest do firm poszukujących
                    doświadczonego <strong>radcy prawnego w Jaworznie, Dąbrowie Górniczej czy Bielsku-Białej</strong>.
                </p>
            </div>
            <OurTeam/>
            <div className="bg-white pb-20 px-4 lg:px-12">
                <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                    Obsługa prawna: Oświęcim, Jaworzno, Dąbrowa Górnicza, Bielsko-Biała i okolice
                </h2>

                <div className="mt-10 max-w-2xl text-gray-600">
                    <p>
                        Specjalizujemy się w <strong>kompleksowej obsłudze prawnej przedsiębiorców
                        indywidualnych</strong>, spółek osobowych oraz spółek prawa handlowego. Dzięki doświadczeniu
                        zdobytemu od 2005 roku, zapewniamy bezpieczeństwo prawne na każdym etapie prowadzenia
                        działalności.
                    </p>
                </div>
                <br/>
                <p className="mb-2 font-medium">Świadczymy wyspecjalizowane usługi prawne również dla Klientów z
                    miast:</p>

                <ul className="list-disc ml-6 mb-6 space-y-1 text-gray-900 marker:text-accent">
                    <li><strong>Częstochowa</strong></li>
                    <li><strong>Andrychów</strong></li>
                    <li><strong>Kęty</strong></li>
                    <li><strong>Pszczyna</strong></li>
                    <li><strong>Wadowice</strong></li>
                    <li><strong>Tychy</strong></li>
                    <li><strong>Zator</strong></li>
                </ul>

                <p className="leading-relaxed italic text-gray-600">
                    Niezależnie od lokalizacji Twojej firmy, zapewniamy rzetelne doradztwo, reprezentację przed sądami
                    oraz wsparcie w bieżących sprawach korporacyjnych.
                </p>
            </div>
        </div>
    )
}

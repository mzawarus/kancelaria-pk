// @flow
import * as React from 'react';
import {InboxIcon, TrashIcon, UsersIcon} from "@heroicons/react/24/solid";

const features = [
    {
        name: 'Prawo gospodarczego i cywilnego:',
        description:
            <div>
                <p>pomoc w rozpoczęciu działalności (zakładanie i rejestracja podmiotów gospodarczych, w tym spółek
                    prawa handlowego), opiniowanie oraz sporządzanie projektów dokumentów korporacyjnych, w tym
                    dokumentów przedkładanych w Krajowym Rejestrze Sądowym, doradztwo w zakresie prawnych aspektów
                    prowadzonej działalności, w tym między innymi:</p>
                <ul className={"list-disc list-inside marker:text-accent"}>
                    <li>reprezentowanie Klientów w negocjacjach handlowych</li>
                    <li>przygotowywanie i negocjowanie umów związanych z obrotem gospodarczym</li>
                    <li>sporządzanie opinii prawnych z zakresu prawa cywilnego, prawa handlowego, prawa pracy oraz
                        innych dziedzin prawa związanych z przedmiotem prowadzonej działalności gospodarczej
                    </li>
                    <li>obsługa organów spółek (posiedzeń zarządu, rady nadzorczej, zgromadzeń wspólników lub
                        akcjonariuszy)
                    </li>
                    <li>obsługa prawna sporów sądowych oraz postępowań przed sądem arbitrażowym</li>
                </ul>
            </div>,
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Manage team members',
        description:
            'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
        href: '#',
        icon: UsersIcon,
    },
    {
        name: 'Spam report',
        description:
            'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
        href: '#',
        icon: TrashIcon,
    },
]

export const BusinessOffers = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
                className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <div className="col-span-2">
                    <div className={"sticky top-28"}>
                        <h2 className="col-span-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                            Stay on top of customer support
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600 text-justify">

                            Kancelaria specjalizuje się w kompleksowej obsłudze prawnej podmiotów gospodarczych - spółek
                            prawa handlowego oraz innych form działalności prawem przewidzianych, zapewniając
                            profesjonalizm oraz wysoki stopień zaangażowania. Zapewniamy obsługę prawną począwszy od
                            etapu tworzenia oraz zarejestrowania spółki, poprzez poszczególne przejawy jej
                            funkcjonowania, aż do zakończenia działalności. Reprezentujemy podmioty gospodarcze w
                            sporach przed sądami i innymi organami wymiaru sprawiedliwości. Klientom zainteresowanym
                            obsługą prawną, proponujemy bieżące konsultacje i prezentowanie stanowiska odnośnie
                            formułowanych problemów prawnych, przygotowywanie oraz opracowywanie dokumentów, umów i
                            wewnętrznych aktów normatywnych uwzględniających specyfikę kontrahenta.
                        </p>
                        <p className="mt-6 text-lg/8 text-gray-600 text-justify">
                            Kancelaria świadczy stałą obsługę prawną oraz doraźne doradztwo w zakresie:
                        </p>
                    </div>
                </div>
                <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-1 pt-14">
                    {features.map((feature) => (
                        <div key={feature.name}>
                            <dt className="text-base/7 font-semibold text-gray-900">
                                <div
                                    className="mb-6 flex size-10 items-center justify-center rounded-lg bg-accent">
                                    <feature.icon aria-hidden="true" className="size-6 text-white"/>
                                </div>
                                {feature.name}
                            </dt>
                            <dd className="mt-1 text-base/7 text-gray-600">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};
// @flow
import * as React from 'react';
import {ChevronRightIcon, HomeIcon} from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {
    label: string
};

const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]
export const Breadcrumbs = (props: Props) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-26 lg:px-8">
                <div
                    className="relative isolate overflow-hidden bg-gray-900 px-6 py-8 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
                        <ol role="list" className="flex items-center space-x-4">
                            <li>
                                <div>
                                    <a href="#" className="text-accent hover:text-accent-dark transition-colors">
                                        <HomeIcon aria-hidden="true" className="size-5 shrink-0"/>
                                        <span className="sr-only">Home</span>
                                    </a>
                                </div>
                            </li>
                            {pages.map((page) => (
                                <li key={page.name}>
                                    <div className="flex items-center">
                                        <ChevronRightIcon aria-hidden="true" className="size-5 shrink-0 text-accent"/>
                                        <a
                                            href={page.href}
                                            aria-current={page.current ? 'page' : undefined}
                                            className="ml-4 text-sm font-medium text-gray-300 hover:text-accent-dark transition-colors"
                                        >
                                            {page.name}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </nav>
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                        Oferta dla Firm
                    </h2>
                    {/*<p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">*/}
                    {/*    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident*/}
                    {/*    excepteur*/}
                    {/*    commodo do ea.*/}
                    {/*</p>*/}
                    {/*<div className="mt-10 flex items-center justify-center gap-x-6">*/}
                    {/*    <a*/}
                    {/*        href="#"*/}
                    {/*        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"*/}
                    {/*    >*/}
                    {/*        {' '}*/}
                    {/*        Get started{' '}*/}
                    {/*    </a>*/}
                    {/*    <a href="#" className="text-sm/6 font-semibold text-white">*/}
                    {/*        Learn more*/}
                    {/*        <span aria-hidden="true">→</span>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    <div className="absolute inset-0 -z-10 size-full">
                        <Image src={"/home/stats.webp"} alt={"stats"} fill  className={"object-cover"}/>
                    </div>
                    <div className={"bg-gray-900/90 absolute inset-0 -z-10"} />
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                                fillOpacity="0.7"/>
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stopColor="#AC6F3E"/>
                                <stop offset={1} stopColor="#AC6F3E"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};
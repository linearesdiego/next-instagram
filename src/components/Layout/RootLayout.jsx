'use client';
import Head from 'next/head';
//css styles
import '../../app/globals.css';
//components
import { Sidebar, TopNavbar } from '..';

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <title>Next- Instagram</title>
                <meta name="description" content="Pagina de inicio de Next-Instagram" />
            </Head>
            <body className="font-inter">
                <div className="flex h-screen overflow-hidden">
                    <Sidebar />
                    <div className="flex lg:hidden">
                        <TopNavbar />
                    </div>
                    <div className="bg-blackOscuro p-10 w-full h-full overflow-y-scroll">
                        {children}
                    </div>
                </div>
            </body>

        </>
    );
}

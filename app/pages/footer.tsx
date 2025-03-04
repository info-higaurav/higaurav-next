import Link from "next/link";

export default function Footer () {
    return(
        <footer className="flex justify-center items-center w-full flex-col bg-gray-200">
            <div className="wrapper max-w-[1400px]  w-full px-3 py-10 flex flex-col gap-5">
                {/* <section className="flex gap-3 flex-col">
                    <h1 className="text-xl font-bold">About</h1>
                    <p className="max-w-[800px]">Portfolio of Gaurav Kumar, a passionate full-stack developer focused on creating innovative web solutions.</p>
                </section>
                <hr className="bg-black w-full h-[1px]"/> */}
                <p className="text-center text-sm font-[400] text-gray-700">© 2025 Gaurav Kumar. All rights reserved.</p>
            </div>
           
        </footer>
    )
}
import { RiScrollToBottomFill } from "react-icons/ri";

export default function Main () {
    return (
        <main className="w-full flex justify-center items-center h-dvh  absolute top-0 -z-50">
            <div className="px-2 max-w-[1200px]">
                <section className="flex flex-col items-center justify-center gap-4 sm:gap-8">
                    <section className="flex flex-col  items-center font-[400] text-4xl sm:text-6xl">
                        <h1>Full Stack Developer</h1>
                        <h1 className="text-gray-600">& Designer</h1>
                    </section>
                    <p className="text-center text-gray-600 text-md sm:text-xl md:max-w-[700px]">Specialized in building scalable enterprise applications with modern technologies and best practices</p>
                    <RiScrollToBottomFill size={25}  className=" animate-bounce duration-1000 bottom-20 mt-20 sm:mt-30" />
                </section>
                
            </div>
           
        </main>
    )
}
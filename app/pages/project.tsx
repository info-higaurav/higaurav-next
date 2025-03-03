import { Button } from "@/components/ui/button";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function Projects () {
    return (
        <div className="mt-[100dvh] bg-gray-100 flex items-center justify-center">
            <div className="wrapper px-3 py-10 lg:py-20 max-w-[1400px] w-full">
            <section className="flex flex-col gap-2 items-center text-center py-10">
                <h1 className="text-2xl font-semibold lg:text-5xl">Featured Projects</h1>
                <p className="lg:text-xl">Showcasing innovative solutions and technical excellence</p>
            </section>
            <section className="flex flex-col gap-10 lg:gap-20">
                <div className="card border p-4 rounded-md overflow-hidden flex flex-col-reverse lg:flex-row lg:p-20  gap-10 bg-white relative w-full ">
                    <section className="flex flex-col gap-3 lg:gap-10 flex-1">
                        <h1 className="text-xl font-bold lg:text-5xl">The Prime Infra</h1>
                        <p className="lg:text-xl">Your trusted partner in real estate, helping you find your perfect property in Dehradun.</p>
                        <div className="project-feature">
                            <section className="">
                                    <p className="flex items-center gap-5"><IoCheckmarkCircleOutline size={30} />User Friendly</p>
                                    <p className="flex items-center gap-5"><IoCheckmarkCircleOutline size={30} />Light Weight and fast</p>
                            </section>
                        </div>
                            <div className="flex gap-5">
                            <Button className="lg:w-fit">Live Preview</Button>
                            <Button className="lg:w-fit" variant={"outline"}>Code</Button>
                            <Button className="lg:w-fit" variant={"outline"}>Design</Button>
                            </div>
                    </section>

                    <section className="flex-1">
                        <img src="https://cdn.prod.website-files.com/6564b9b5ae585873f21870f7/67351724355e62ef1c0a4a4c_67338a6646e51822c06cff89_hero-img-lcmortgages.webp" alt=""  
                        className=" lg:absolute lg:w-3xl" />
                    </section>
                </div>

                <div className="card border p-4 rounded-md overflow-hidden flex flex-col-reverse lg:flex-row lg:p-20  gap-10 bg-white relative w-full ">
                    <section className="flex flex-col gap-3 lg:gap-10 flex-1">
                        <h1 className="text-xl font-bold lg:text-5xl">ProjectFlow</h1>
                        <p className="lg:text-xl">To simplify project management while delivering powerful tools that transform how teams collaborate, plan, and achieve goals.</p>
                        <div className="project-feature">
                            <section className="">
                                    <p className="flex items-center gap-5"><IoCheckmarkCircleOutline size={30} />User Friendly</p>
                                    <p className="flex items-center gap-5"><IoCheckmarkCircleOutline size={30} />Light Weight and fast</p>
                            </section>
                        </div>
                            <div className="flex gap-5 ">
                            <Button className="lg:w-fit">Live Preview</Button>
                            <Button className="lg:w-fit" variant={"outline"}>Code</Button>
                            <Button className="lg:w-fit" variant={"outline"}>Design</Button>
                            </div>
                    </section>

                    <section className="flex-1">
                        <img src="https://cdn.prod.website-files.com/6564b9b5ae585873f21870f7/67351724355e62ef1c0a4a4c_67338a6646e51822c06cff89_hero-img-lcmortgages.webp" alt=""  
                        className=" lg:absolute lg:w-3xl" />
                    </section>
                </div>  

            </section>
            </div>
        
        </div>
    )
}
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

export default function Contact (){
    return(
        <div className="flex justify-center items-center w-full">
            <div className="wrapper max-w-[1400px] flex flex-col p-3 w-full   ">
                <section className="flex flex-col gap-2 items-center text-center py-10">
                    <h1 className="text-2xl font-semibold lg:text-5xl">Contact Us</h1>
                    <p className="lg:text-xl">Get in touch with us for any queries </p>
                </section>
                <section className="flex flex-col-reverse xl:flex-row pb-10">

                    <section className="text-gray-900 p-3 flex flex-col gap-5 xl:flex-1">
                       <h1 className="font-bold">Contact</h1>
                        <div className="border flex flex-col gap-5 p-3 rounded-xl">
                            <div className="flex items-center justify-start gap-5">
                                <MdMarkEmailUnread size={25} />
                                <p className="text-md">ai.higaurav@gmail.com</p>
                            </div>

                            <div className="flex items-center justify-start gap-5 ">
                                <FaPhoneAlt  size={25} />
                                <p>+91 7217 396015</p>
                            </div>

                            <div className="flex items-center justify-start gap-5 ">
                                <RiWhatsappFill  size={25} />
                                <p>WhatsApp Us</p>
                            </div>
                        </div>
                        <h1 className="font-bold">Availbility</h1>
                        <div className="border flex flex-col gap-5 p-3 rounded-xl">
                        
                            <div className="flex items-center justify-between gap-5 ">
                                <p>Monday-Saturday</p>
                                <p>10:00 AM - 6:00 PM</p>
                            </div>

                            <div className="flex items-center justify-between gap-5 ">
                                <p>Sunday</p>
                                <p>By Email</p>
                            </div>
                        </div>
                        <h1 className="font-bold">Social Links</h1>
                        <div className="flex items-center justify-around gap-5 border rounded-md p-3 ">
                            <FaSquareInstagram size={25} />
                            <FaFacebook size={25}/>
                        </div>

                    </section>

                    <section className="flex justify-center items-center xl:flex-1 xl:ml-10  rounded-xl overflow-hidden">
                       <img src="./contact.svg" alt="contact" className="w-full max-w-[900px] h-auto" />
                    </section>
                </section>
            </div>
        </div>
    )
}
import weWork from "../../assets/Images/WeWork03.png"

export default function WorkTogether() {
    return (
        <div className="flex justify-center  gap-14 py-48">
            {/* Banner */}
            <section className="w-1/2 flex flex-col justify-center gap-10 ">
                <h1 className="text-5xl font-bold">
                    Work together, <br />
                    wherever you work
                </h1>
                <p className="text-[#05003899]">
                    In the office, remote, or a mix of the two, with Miro, <br />
                    your team can connect, collaborate, and co-create in <br />
                    one space no matter where you are.
                </p>
                <a className="block text-[#4262FF] underline underline-offset-4 text-lg">
                    Learn more →
                </a>

            </section>
            <section className="w-1/2">
                <div>
                    <img src={weWork} alt="" className="" />
                </div>
            </section>
        </div>
    )
}

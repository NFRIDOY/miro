

export default function Banner() {
    return (
        <div>
            {/* Banner */}
            <section >
                <h1 className="text-6xl font-bold">
                    Take ideas from <br />
                    better to best
                </h1>
                <p>
                    Miro is your team&apos;s visual platform to connect, <br />
                    collaborate, and create — together.
                </p>
                <div>
                    <form >
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <a className="btn bg-[#4262FF] text-white rounded-full hover:bg-[#5869c2]">Sign up free →</a>
                    </form>
                </div>
            </section>
            <section></section>
        </div>
    )
}

import Connectimg from "../../assets/Images/ConnectImg.png";

export default function Connect() {
    return (
        <div className="flex flex-row-reverse justify-between gap-0 pt-32">
            {/* Banner */}
            <section className="w-1/2 flex flex-col justify-center gap-10 pl-32">
                <h1 className="text-5xl font-bold">
                    Connect <br />
                    your tools, <br />
                    close your tabs
                </h1>
                <p className="text-[#05003899]">
                    Whether you want to edit your Google Docs, resolve  <br />
                    Jira issues, or collaborate over Zoom, Miro has 100+  <br />
                    integrations with tools you already use and love.
                </p>
                <a className="block text-[#4262FF] underline underline-offset-4 text-lg">
                    Learn more →
                </a>

            </section>
            <section className="w-1/2">
                <div>
                    <img src={Connectimg} alt="" className="" />
                </div>
            </section>
        </div>
    )
}

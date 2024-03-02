import SignupFree from "../Buttons/SignupFree";


export default function Collaborate() {
    return (
        <div className="pt-32">
            <section className="relative">
                <h5 className="uppercase text-[#090909] bg-[#FFD02F] w-fit px-3 py-1 text-sm font-bold rounded-xl rotate-12 absolute right-72 -top-20">
                    your idea starts here
                </h5>
                <h1 className="text-5xl font-bold text-center text-[#050038]">
                    Collaborate without
                    <br />
                    constraints
                </h1>
            </section>
            <section className="grid grid-cols-3 pt-16 gap-x-7">
                <div>
                    <h2 className="text-2xl font-bold pb-10">Free forever</h2>
                    <p className="text-lg">
                        Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our 
                        <a className="text-[#4262FF]" href=""> pricing plans </a> for more features.

                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold pb-10">Easy integrations</h2>
                    <p className="text-lg">

                        Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <a className="text-[#4262FF]" href="">Marketplace</a> .
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold pb-10">Security first</h2>
                    <p className="text-lg">
                        We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more
                        at our <a className="text-[#4262FF]" href="">Trust Center</a>.
                    </p>
                </div>
            </section>
            <div className="text-center pt-16">
                <SignupFree />
            </div>
        </div>
    )
}

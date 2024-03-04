

// eslint-disable-next-line react/prop-types
export default function CustomerCard({ avater, name, description}) {
    return (
        <div className="flex gap-x-4 my-10">
            <div>
                <img width="48" src={avater} alt="" />
            </div>
            <div className="text-[#050038b3]">
                <h3>{name}</h3>
                <h3>{description}</h3>
            </div>
        </div>
    )
}

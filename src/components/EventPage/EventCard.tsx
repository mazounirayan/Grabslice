
interface EventCardProps {
    
    image: string;
    title: string;
    description: string;
    date: Date;
    users: { name: string; }[];
}

export default function EventCard (EventCardProps: EventCardProps) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="h-1/2">
                <img src={EventCardProps.image} alt={EventCardProps.title} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">titre  : {EventCardProps.title}</h2>
                <p>description : {EventCardProps.description}</p>
                <p>date : {EventCardProps.date.toLocaleDateString()}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {EventCardProps.users.map((user, index) => (
                        <span
                            key={index}
                            className="rounded badge badge-lg"
                            style={{ backgroundColor: "white" }}
                        >
                            <div className="badge"
                            style={{ backgroundColor: "white" }}/>
                            <p className='m-1'>
                                {user.name}
                            </p>
                        </span>
                    ))}
                </div>
                <div className="card-actions justify-start mt-4">
                    <button className="btn btn-primary">Like</button>
                    <button className="btn btn-secondary">Comment</button>
                </div>
            </div>
        </div>
    );
}


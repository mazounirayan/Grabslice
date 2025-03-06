
interface PizzaCardProps {
    image: string;
    title: string;
    toppings: string;
    ingredients: { name: string; color: string }[];
}

export default function PizzaCard (PizzaCardProps: PizzaCardProps) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="h-1/2">
                <img src={PizzaCardProps.image} alt={PizzaCardProps.title} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">titre  : {PizzaCardProps.title}</h2>
                <p>menu : {PizzaCardProps.toppings}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {PizzaCardProps.ingredients.map((ingredient, index) => (
                        <span
                            key={index}
                            className="rounded badge badge-lg"
                            style={{ backgroundColor: "white" }}
                        >
                            <div className="badge"
                            style={{ backgroundColor: ingredient.color }}/>
                            <p className='m-1'>
                                {ingredient.name}
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
};


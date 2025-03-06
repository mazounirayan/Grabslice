export default function CompanyDesc() {


    return (
        <div className='md:container md:mx-auto min-h-screen flex flex-col justify-center items-center'>
            <div className=' min-h-2 '></div>
            <div className=' flex flex-col justify-center items-center p-8'>
                <article className="prose text-center max-w-4xl">
                    {/* lorem ipsum */}
                    <h2>À propos de nous</h2>
                    
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla</p>
                </article>
            </div>
            <div className='min-h-2 '></div>
        </div>
    )
}
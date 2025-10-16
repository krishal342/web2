function Title({title, subtitle}){

    return(
        <div className="w-full flex flex-col justify-center items-center border-box text-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-xl">{subtitle}</p>
        </div>
    );
}

export default Title
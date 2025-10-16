import './Box.css'
function Box(props) {

    return (
        <div className="  shadow-xl  box">
            <div className='img'>
                <img src={props.image} alt="image" />

            </div>
            <div className="over">
                <h1 className="text-center text-xl font-semibold ">{props.h1}</h1>
                <p className=" text-justify flex justify-center">{props.p}</p>
            </div>
        </div>
    );
}
export default Box
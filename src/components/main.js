import vincent from '../assets/vincent.mp4';

const Main = () => {
    return (
        <div className='main'>
            <div className='overlay'></div>
            <video autoPlay loop muted>
                <source src={vincent} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Elizabeth</h1>
                <p>Feliz cumpleaños</p>
            </div>
        </div>
    );
}

export default Main;
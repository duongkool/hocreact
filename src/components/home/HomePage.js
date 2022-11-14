import videoHomePage from '../../assets/videohomepage.mp4';
const HomePage = (props) => {
    return (
        <div className="homepage-containeer">
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/mp4"/>
            </video>
        </div>
    )
}
export default HomePage;
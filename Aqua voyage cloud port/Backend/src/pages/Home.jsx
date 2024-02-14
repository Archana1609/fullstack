import CustomNavbar from "../components/CustomNavbar"
import S3Uploader from "../components/S3Uploader"

const Home = () => {
    return (

<div className="container">
    <header>
    <CustomNavbar/>
    </header>
    <main>
        <section><S3Uploader/></section>
        <section className="hero">
            <p>welcome to my page</p>

        </section>
        <section className="team_wrapper">
            <p> hello</p>
        </section>
        <aside></aside>
    </main>
</div>
    )
}
export default Home
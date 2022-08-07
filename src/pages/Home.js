import { useParams } from "react-router-dom"
import Header from "../components/Header"

function Home(props){

    let { userid, username } = useParams();
    
    return(
        <div className="Home">
            <Header />
            hello from Home,  {userid}, {username}
        </div>
    )
}

export default Home
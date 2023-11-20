import Header from "../../components/Header/Header"
import {PROVIDER} from '../../contexts/contexts.js'
import './Home.css'

function Home(){
    return (
        <PROVIDER>
            <Header title={"INÍCIO"}/>
        </PROVIDER>
    )
}

export default Home
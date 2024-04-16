import Listpage from "./listpage"
import Textbox from "./textbox";

export default function Mainpage(){
    return(
        <div className="container d-flex justify-content-center">
            <div className="shadow p-4 w-50 m-5">
                <h1 className="text-center mb-3 mt-3">Todo List </h1>
                <Textbox/>
                <Listpage/>

            </div>

        </div>
    )
}
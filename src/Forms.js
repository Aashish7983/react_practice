import { useFormik } from "formik";


const Forms = () =>{
    return(
        <div>
            <form>
                <label htmlFor="name" id="name" >username</label>
                <input type="text" id="name"/>
                <br/>
                <label>email</label>
                <input/>
            </form>
        </div>
    )
}
export default Forms;
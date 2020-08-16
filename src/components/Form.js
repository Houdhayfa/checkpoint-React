import React from 'react'

function Form() {
    return(
   <form>
          <div className="form-group">
            <label for="formGroupExampleInput">Name</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Houdhayfa"></input>
          </div>

          <div className="form-group">
            <label for="formGroupExampleInput2">LastName</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ben khlil"></input>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Job</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Full stack Js developer"></input>
          </div>
</form>
    )
}
export default Form
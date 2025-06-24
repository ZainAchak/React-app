import React from "react"

export default function FormsReact() {
    
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const formEl = event.currentTarget
    //     const formData = new FormData(formEl)
    //     const email = formData.get("email")
    //     const password = formData.get("password")
    //     console.log(email,password)
    //     formEl.reset()
    // }

    function signUp(formData) {
        // These commented steps will be done by react in the backend
        // event.preventDefault();
        // const formEl = event.currentTarget
        // const formData = new FormData(formEl)
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email,password)
        // formEl.reset()
    }



    return (
        <section>
            <h1>Signup form</h1>
            {/* onSubmit={handleSubmit} */}
            <form action={signUp}> 
                <label htmlFor="email">Email: </label>
                <input id="email" type="email" name="email" placeholder="Email" autoComplete="username"/>
                <br />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" name="password" autoComplete="current-password"/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
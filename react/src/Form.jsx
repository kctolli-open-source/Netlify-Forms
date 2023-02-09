function Form() {
    return (
        <form name="connect" method="POST" netlify>
            <input type="hidden" name="form-name" value="connect" />
            <p>
                <label>Enter Your Name: 
                    <input type="text" name="name" />
                </label>
            </p>
            <p>
                <label>Enter Your Email: 
                    <input type="email" name="email" />
                </label>
            </p>
            <p>
                <label>
                    <input type="radio" name="phonetype" value="Cell" /> Cell
                </label>
                <label>
                    <input type="radio" name="phonetype" value="Work" /> Work
                </label>
                <label>
                    <input type="radio" name="phonetype" value="Home" /> Home
                </label>
                <label>
                    <input type="radio" name="phonetype" value="Other" /> Other
                </label>
            </p>
            <p>
                <label>Enter Your Phone Number: 
                    <input type="tel" name="phone" />
                </label>
            </p>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;

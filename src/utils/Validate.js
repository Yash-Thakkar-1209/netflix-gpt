export const checkValidData = (email, password, name) => {

    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    // const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

    if(!isEmailValid) return "Email ID is Not Valid";
    if(!isPasswordValid) return "Password is Not Valid";
    // if(!isNameValid) return "Name is Not Valid";

    return null;

}
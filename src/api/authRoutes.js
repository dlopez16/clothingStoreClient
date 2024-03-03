export const REGISTER = async (userInfo) => {
    try {
        const response = await fetch("http://localhost:4800/register", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo)
        })
        const result = await response.json();
        console.log(result)

    } catch (error) {
        return Promise.reject(response)
    }
}

export const SIGN_IN = async (userInfo) => {
    const response = await fetch("http://localhost:4800/login", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo)
    })
    if (!response.ok)
        return Promise.reject(response)
    return response.json()

}


export const whoAmI = async () => {
    const response = await fetch("http://localhost:4800/whoAmI", {
        method: "GET",
        credentials: "include",

    });
    if (!response.ok)
        return Promise.reject(response)
    return response.json()
}
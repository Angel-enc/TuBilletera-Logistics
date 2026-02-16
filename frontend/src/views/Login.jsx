import { useState } from "react";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            email: email,
            password: password
        };

        const response = await fetch("https://orange-space-computing-machine-pj9v6jxvr775c7j45-5000.app.github.dev/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend)
        });

        if (response.ok) {
            const data = await response.json();
            console.log("¡Te has logueado con éxito!:", data.msg);

            localStorage.setItem("token", data.token);

            alert("Has entrado correctamente");
            //Meter useNavigate para volver al Home
            navigate("/"); // 3. ¡Redirección mágica al Home!
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card p4 shadow-sm" style={{ maxWidth: "400px", margin: "auto" }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <h2> Inicia sesión</h2>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <h2>Contraseña</h2>
                        <label htmlFor="inputPassword5" className="form-label">Password</label>
                        <input
                            type="password"
                            id="inputPassword5"
                            className="form-control"
                            aria-describedby="passwordHelpBlock"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button type="submit" className="btn btn-outline-success">Iniciar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
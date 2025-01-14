import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function Dashboard({title}) {
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('nama') && !localStorage.getItem('nim')) {
            console.log("User belum login")
            navigate('/login')
        }
    }, [])

    return (
        <Container>

            <div>
                <h1>Hello, {localStorage.getItem('nama')}🙌</h1>
                <p>NIM{localStorage.getItem('nim')}</p>
            </div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">NIM</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Status</th>
                    <th scope="col">Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}

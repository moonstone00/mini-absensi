import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Edit from "./Edit"
import { logout } from "../../utils/logout"

export default function Dashboard() {
    const [absensiList, setAbsensiList] = useState([])
    const [absenNotif, setAbsenNotif] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('nama') && !localStorage.getItem('nim')) {
            navigate('/login')
        }

        axios({
            method: 'GET',
            url: 'http://localhost:3200/absensi',
        }).then((result) => setAbsensiList(result.data.absensi))
    }, [absenNotif])


    const absen = (params) => {
        const requestingData = {
            nim: localStorage.getItem('nim')
        }
        axios({
            method: 'POST',
            url: `http://localhost:3200/absensi/${params}`,
            data: requestingData
        }).then(() => {
            setAbsenNotif(!absenNotif)
        })
    }

    return (
        <Container>
            <div>
                <h1>Hello, {localStorage.getItem('nama')}🙌</h1>
                <p>NIM: {localStorage.getItem('nim')}</p>
            </div>

            <Edit/>
                
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">NIM</th>
                    <th scope="col">Status</th>
                    <th scope="col">Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        absensiList.map((absensi, index) => {
                            const {users_nim, status, createdAt} = absensi
                            return (
                                <tr key={index} >
                                    <th scope="row">{index + 1}</th>
                                    <td>{users_nim}</td>
                                    <td>{status}</td>
                                    <td>{createdAt}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-between" >
                <Button variant="danger" onClick={() => logout()} >Logout</Button>
                <div className="d-flex gap-2" >
                    <Button variant="primary" onClick={() => absen('checkin')} >Checkin</Button>
                    <Button variant="danger" onClick={() => absen('checkout')} >Checkout</Button>
                </div>
            </div>
        </Container>
    )
}

import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { logout } from "../../utils/logout";

export default function Edit() {
    const [nama, setNama] = useState(localStorage.getItem("nama"))
    const [password, setPassword] = useState("")
    const [passwordBaru, setPasswordBaru] = useState("")

    const updateProfile = () => {
        const requestingData = {
            nim: localStorage.getItem("nim"),
            nama: nama,
            password: password,
            passwordBaru: passwordBaru
        }

        axios({
            method: "PUT",
            url: "http://localhost:3200/users",
            data: requestingData,
        }).then(() => logout())
    }

    return (
        <Form>
            <h3>Update Profile</h3>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(event) => setNama(event.target.value)} defaultValue={localStorage.getItem('nama')} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password Baru</Form.Label>
                <Form.Control onChange={(event) => setPasswordBaru(event.target.value)} />
            </Form.Group>
            <hr/>
            <Form.Group  >
                <Form.Label>Password Lama</Form.Label>
                <Form.Control onChange={(event) => setPassword(event.target.value)} />
                <Form.Text className="text-muted" >Silahkan masukkan password lama anda. Anda diharuskan melakuan login ulang setelah mengupdate password.</Form.Text>
            </Form.Group>
            <Button className="my-4" onClick={() => updateProfile()} >Update Profile</Button>
        </Form>
    )
}

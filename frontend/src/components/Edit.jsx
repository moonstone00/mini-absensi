import { Form, Button } from "react-bootstrap";

export default function Edit() {
    return (
        <Form>
            <h3>Update Profile</h3>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password Baru</Form.Label>
                <Form.Control/>
            </Form.Group>
            <hr/>
            <Form.Group  >
                <Form.Label>Password Lama</Form.Label>
                <Form.Control/>
                <Form.Text className="text-muted" >Silahkan masukkan password lama anda. Anda diharuskan melakuan login ulang setelah mengupdate password.</Form.Text>
            </Form.Group>
            <Button className="my-4" >Update Profile</Button>
        </Form>
    )
}

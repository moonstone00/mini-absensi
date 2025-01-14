import ReactTypingEffect from 'react-typing-effect'
import { Container, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login({title, description}) {
    const [NIM, setNIM] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleNIM = (inputNIM) => {
        setNIM(inputNIM)
    }

    const handlePassword = (inputPassword) => {
        setPassword(inputPassword)
    }

    const userLogin = () => {
        const requestingData = {
            nim: NIM,
            password: password
        }
        axios({
            method: 'POST',
            url: 'http://localhost:3200/users/login',
            data: requestingData
        }).then((result) => {
            localStorage.setItem("nim", result.data.data.nim)
            localStorage.setItem("nama", result.data.data.nama)
            navigate('/dashboard')
        })
    }

  return (
    <Container>
        <div className='d-flex justify-content-center fw-bold h3 my-4' >
            <ReactTypingEffect
                text={[title, description]}
                speed={100}
                eraseSpeed={100}
                typingDelay={100}
                eraseDelay={800}
            />
        </div>
        <Form className='w-50 mx-auto' >
            <Form.Group>
                <Form.Label className='fw-bold' >NIP</Form.Label>
                <Form.Control 
                    type='number' 
                    placeholder='Masukkan NIP anda' 
                    required 
                    onChange={(event) => handleNIM(event.target.value)}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label className='fw-bold' >PASSWORD</Form.Label>
                <Form.Control 
                    type='password' 
                    placeholder='*****' 
                    required 
                    onChange={(event) => handlePassword(event.target.value)}
                />
            </Form.Group>
            <Button className='mt-4 w-100' onClick={() => userLogin()} >Login Sekarang</Button>
        </Form>
    </Container>
  )
}

import ReactTypingEffect from 'react-typing-effect'
import { Container, Form, Button } from 'react-bootstrap'

export default function Login({title, description}) {

    const handleNIP = (inputNIP) => {
        console.log(inputNIP)
    }

    const handlePassword = (inputPassword) => {
        console.log(inputPassword)
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
                    onChange={(event) => handleNIP(event.target.value)}
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
            <Button className='mt-4 w-100' >Login Sekarang</Button>
        </Form>
    </Container>
  )
}

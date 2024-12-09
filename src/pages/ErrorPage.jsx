import { Container } from "react-bootstrap";

export default function ErrorPage() {
    return (
        <>
            <Container>
                <h1 className="my-3">Oops!</h1>
                <p>Page not found</p>
            </Container>
        </>
    )
}
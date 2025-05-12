import { Link, useNavigate, Navigate } from "react-router";
import { useState, useContext } from "react";
// import Spinner from "../Spinner/Spinner";
// import { register } from "../../services/auth";
// import { UserContext } from "../../contexts/UserContext";

export default function Register(){
    // const { user } = useContext(UserContext)

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({})

    const navigate = useNavigate()

    const handleChange = ({ target: { name, value } }) => {
        setFormData({
          ...formData, 
          [name]: value
        })
        setError({ ...error, [name]: '' })
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        setIsLoading(true)
        try {
          await register(formData)
          navigate('/login')
        }
        catch (error) {
          setError(error.response.data)
        }
        finally {
          setIsLoading(false)
        }
    }
    if (user) {
        return <Navigate to="/" />
    }
}
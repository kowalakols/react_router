import { useState } from "react"
import { deleteActivity } from "../../services/activitiesFetch"
import { useParams, useNavigate } from "react-router"

export default function ActivityDelete(){
  // * State
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // * Location variables
  const { activityId } = useParams()
  const navigate = useNavigate()

  // * Functions
  async function handleDelete(){
    setIsLoading(true)
    try {
      await deleteActivity(activityId)
      navigate('/activities')
    } catch (error) {
      setError(error.response.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      { error && <p className="error-message">{error}</p> }
      <button className='delete-activity' onClick={handleDelete}>
        {isLoading ? <p>Loading</p> : 'Delete'}
      </button>
    </>
  )
}
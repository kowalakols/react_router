import { Link, useParams } from 'react-router'
import { getSingleActivity } from '../../services/activitiesFetch'
import useFetch from '../../hooks/useFetch'
import { UserContext } from '../../contexts/UserContext'
import { useContext } from 'react'

import ActivityDelete from '../ActivityDelete/ActivityDelete'


export default function ActivityShow(){
    const { activityId } = useParams()

    const { user } = useContext(UserContext)

    const { data: activity, isLoading, error } = useFetch(getSingleActivity,{}, activityId)

    return (
            <>
              {error
                ? <p className='error-message'>{error}</p>
                : isLoading
                  ? <p>Loading...</p>
                  : (
                    <section className="single-activity">
                      <h1>{activity.title}</h1>
                      <p>📍 {activity.location}</p>
                      <p>{activity.description}</p>
                      <p>Duration: {activity.duration} mins</p>
                      { user && user._id === activity.owner &&
                        <div className="controls">
                          <Link className='edit-activity' to={`/activities/${activityId}/edit`}>Edit</Link>
                          <ActivityDelete />
                        </div>
                      }
                    </section>
                  )
              }
            </>
    )
}
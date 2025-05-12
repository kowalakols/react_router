import { Link, useParams } from 'react-router'
import { getSingleActivity } from '../../services/activitiesFetch'
import useFetch from '../../hooks/useFetch'

export default function ActivityShow(){
    const { activityId } = useParams()

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
                      <Link to={`/activities/${activityId}/edit`}>Edit</Link>
                    </section>
                  )
              }
            </>
    )
}
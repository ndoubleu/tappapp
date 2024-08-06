import Teams from '@/components/team'
import { fetchUsers } from '@/services/users.services';

export default function Team(props: any) {
  return (
    <>
    <Teams users={props.data}/> 
    </>
  )
}

export const getServerSideProps = (async () => {
  const data = await fetchUsers();
  return { props: { data } }
})
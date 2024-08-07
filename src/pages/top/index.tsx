import Top from '@/components/top'
import { fetchUsers } from '@/services/users.services';

export default function Tap(props: any) {
  return (
    <>
    <Top  users={props.data}/> 
    </>
  )
}
export const getServerSideProps = (async () => {
  const data = await fetchUsers();
  return { props: { data } }
})
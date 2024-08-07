import Earns from '@/components/earn'

export default function Earn(props?: any) {
  console.log(props);
  return (
    <>
    <Earns/> 
    </>
  )
}
export async function getServerSideProps(context: any) {
  const  params = context.params;
  return{
    props: {param: 'search'}
  }
}
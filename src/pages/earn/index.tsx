import Earns from '@/components/earn'

export default function Earn({ section }) {
  return (
    <>
    <Earns section={section}/> 
    </>
  )
}
export const getServerSideProps = async (context: any) => {
  const { section } = context.query;
  const safeSection = section || null;
  return {
    props: { section: safeSection },
  };
};
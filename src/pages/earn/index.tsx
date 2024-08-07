import Earns from '@/components/earn'

interface EarnProps {
  section: string;
}
const Earn: React.FC<EarnProps> = ({ section }) => {
  return (
    <>
    <Earns section={section}/> 
    </>
  )
}
export default Earn;
export const getServerSideProps = async (context: any) => {
  const { section } = context.query;
  const safeSection = section || null;
  return {
    props: { section: safeSection },
  };
};
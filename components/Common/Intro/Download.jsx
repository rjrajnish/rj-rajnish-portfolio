import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
const Download = ({ icon }) => {
  return (
    <>
      <Link href='/RAJNISH_PANDEY_RESUME_NEW.pdf' target='_blank'   className='button   text-LightGray gap-x-4  '>
        <span className='text-Snow'>Download Resume  </span>
      
      </Link>
    </>
  );
};

export default Download;

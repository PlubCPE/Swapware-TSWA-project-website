import { FC , useState, useEffect} from 'react'
import axios from 'axios'

const MemberProfile : FC = () => {
    const [member,setMember] = useState();

    useEffect(() => {
        const fetchMembers = async () => {
            try{
                const res = await axios.get('api/members');
                setMember(res.data); 
            }catch (err) {
                console.error('Error fetching data:',err);
            }
        }
        fetchMembers();
    },[]);

  return (
    <div>MemberProfile</div>
  )
}

export default MemberProfile
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
            <div className='backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid grid-cols-2 relative'>
                <Sidebar />
                <ChatContainer />
                <ChatContainer />

            </div>
        </div>
    )
}

export default HomePage

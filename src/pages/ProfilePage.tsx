import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'
import { logout } from '../store/userSlice'

function ProfilePage() {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>()

  if (!user.name) {
    return <p className="p-4">You are not logged in.</p>
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      <p className="mb-4">Welcome, {user.name} 🎉</p>
      <button
        onClick={() => dispatch(logout())}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  )
}

export default ProfilePage

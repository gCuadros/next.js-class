import ProfileCard from '../../../components/ProfileCard'

const ProfilePage = async ({ params }) => {
  const { userId } = params

  return <ProfileCard userId={userId} />
}

export default ProfilePage

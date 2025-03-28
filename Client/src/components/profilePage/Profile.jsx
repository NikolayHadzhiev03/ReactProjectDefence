import useAuth from "../../hooks/useAuth"

export default function Profile() {
  const user = useAuth();

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <div className="profile-card">
        <div className="profile-image-container">
          <img 
            src="/profilepicture.png"
            alt="Profile" 
            className="profile-image" 
          />
        </div>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}

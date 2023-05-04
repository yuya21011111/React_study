import "./Profile.css";

const Profile = ({name = "John Done", age = "??", country = "Japna" }) => {
  return (
    <div className="profile">
      <h2>Name:{name}</h2>
      <h2>Age:{age}</h2>
      <h2>From:{country}</h2>
    </div>
  );
};


export default Profile;

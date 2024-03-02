import AvatarImage from '../assets/avatar.png';

const Avatar = () => {
    return (
        <div className="avatar-container">
        <img src={AvatarImage} alt="Avatar" className="avatar" />
    </div>
);
}

export default Avatar;

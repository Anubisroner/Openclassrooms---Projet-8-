import AvatarImage from '../assets/avatar.png';

const Avatar = () => {
    return (
        <div class="avatar-container">
            <img src={AvatarImage} alt="Avatar" class="avatar" />
        </div>
    );
}

export default Avatar;

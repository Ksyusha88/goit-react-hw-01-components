import PropTypes from "prop-types";
import defaultImage from '../defaultImage.jpg';
import style from '../Profile/Profile.module.css';


const Profile = ({ name,tag, location, avatar, stats  }) => {
    return (
    <div className={style.profile}>
        <div className={style.description}>
            <img src={avatar} alt={name} className={style.avatar} width="240"/>
            <p className={style.name}>{name}</p>
            <p className={style.tag}>{tag}</p>
            <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
            <li>
                <span className={style.label}>Followers</span>
                <span className={style.quantity}>{stats.followers}</span>
            </li>
            <li>
                <span className={style.label}>Views</span>
                <span className={style.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={style.label}>Likes</span>
                <span className={style.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
}

Profile.defaultProps = {
    name: "stranger",
    avatar: defaultImage,
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;



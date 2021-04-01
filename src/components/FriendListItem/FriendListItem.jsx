import PropTypes from 'prop-types';
import defaultImage from '../defaultImage.jpg';
import style from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline, id }) => {
const status = isOnline ? style.isOnline : style.isOfline;
    return (
        <li className="item" key={id}>
        <span className={status}></span>
        <img className={style.avatar} src={avatar} alt={name} width="48" />
        <p className={style.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  };

FriendListItem.defaultProps = {
    name: "stranger",
    avatar: defaultImage,
    isOnline: false,
};  

export default FriendListItem;
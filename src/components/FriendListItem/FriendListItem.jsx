import PropTypes from 'prop-types';
import defaultImage from '../defaultImage.jpg';

const FriendListItem = ({avatar, name, isOnline, id}) => {
    
    return (
        <li className="item" key={id}>
        <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
        </li>
    )
};

FriendListItem.propType = {
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
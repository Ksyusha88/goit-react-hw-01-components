import PropTypes from "prop-types";
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList =({ friends }) =>(
    <ul className="friend-list">
    <FriendListItem friends ={friends}/>
    </ul>
)

FriendList.propsType = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number,
      })
    ),
  };

export default FriendList;
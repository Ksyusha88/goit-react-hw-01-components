import FriendListItem from '../FriendListItem/FriendListItem';
import style from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map(({ isOnline, avatar, name }) => (
      <li key={name}>
        <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);


export default FriendList;
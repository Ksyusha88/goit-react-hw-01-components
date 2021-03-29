import Profile from './components/Profile/Profile';
import user from './Data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './Data/statistical-data.json';
import friends from './Data/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './Data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';





function App() {
  return (
    <div className="App">
      <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </div>
    );
}

export default App;
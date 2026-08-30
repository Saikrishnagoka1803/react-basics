import react from 'react';

class User extends react.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
            userData: {
                name: '',
                avatar_url: '',
                user_view_type: ''
            }
        };
    }

    async componentDidMount() {
        const response = await fetch('https://api.github.com/users/saikrishnagoka');
        const userData = await response.json();
        console.log(userData);
        this.setState({
            userData: {
                name: userData.login,
                avatar_url: userData.avatar_url,
                user_view_type: userData.type
            }
        });
    }

    render() {
        const { name, location, contact } = this.props.userInfo;
        const { count, count2 } = this.state;
        return (
            <div className="user-card">
                <h1>count: {count}</h1>
                <h1>count2: {count2}</h1>
                <button onClick={() => this.setState({ count: count + 1 })}>Increment Count</button>
                <button onClick={() => this.setState({ count2: count2 + 1 })}>Increment Count2</button>
                <h1>User Class Component</h1>
                <h2>{this.state.userData.name || name}</h2>
                <p>{this.state.userData.avatar_url || location}</p>
                <p>Contact: {this.state.userData.user_view_type || contact}</p>
            </div>
        );
    }
}

export default User;
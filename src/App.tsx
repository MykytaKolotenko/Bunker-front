import { useEffect } from 'react';
import { io } from 'socket.io-client';
const socket = io('http://localhost:8081');

const onConnect = () => {
	console.log('connect to socked');

	socket.on('rooms:all', (arg) => {
		console.log('room:all data:', arg);
	});
};

const App: React.FC = () => {
	useEffect(() => {
		socket.on('connect', onConnect);

		// return socket.removeAllListeners;
	}, []);

	return <div className="App"></div>;
};

export default App;

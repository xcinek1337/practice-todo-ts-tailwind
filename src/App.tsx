import React from 'react';

import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'finish the curse' }];
	return (
		<div className='App'>
      {/* a component that adds todos */}
			<TodoList items={todos} />
		</div>
	);
};

export default App;

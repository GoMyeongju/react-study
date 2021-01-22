import { React, useState } from 'react';

export default function TodoList(){
    const [todos, setTodos] = useState([]); // 할 일 목록 관리할 상태값 정의
    const onClick = () => { // 할 일 추가 버튼 클릭하면 호출되는 이벤트 함수
        import('./Todo').then(({Todo}) => { // onClick 함수가 호출되면 비동기로 Todo 모듈을 가지고 옴
            const position = todos.length+1;
            const newTodo = <Todo key={position} title={`할 일 ${position}`}></Todo>; // 비동기로 가지고 온 Todo 컴포넌트를 이용하여 새로운 할 일 생성
            setTodos([...todos, newTodo]); 
        });
    };

    return (
        <div>
            <button onClick={onClick}>할 일 추가</button>
            {todos} 
        </div>
    ); // 상태값에 저장된 항 일 목록 출력
}

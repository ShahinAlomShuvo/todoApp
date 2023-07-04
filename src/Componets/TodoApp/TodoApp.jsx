import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/Css/bootstrap.min.css";
import "../../assets/Css/style.css";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = () => {
    if (inputText.trim() !== "") {
      setTodoList([...todoList, inputText]);
      setInputText("");
    }
  };

  const deleteTodo = (index) => {
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const enterKey = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col>
            <div className='wrappingConainer'>
              <div className='inputContainer'>
                <input
                  type='text'
                  placeholder='Enter Your text'
                  className='form-control form-control-md todoInput'
                  onChange={onChangeHandler}
                  value={inputText}
                  onKeyDown={enterKey}
                />
                <button onClick={addTodo} className='btn btn-primary'>
                  Add
                </button>
                <h1 className='todoTitle'>Todo List</h1>
                <hr className='hr' />
                <div className='itemsContainer'>
                  {todoList.map((todoItem, index) => {
                    return (
                      <p key={index} className='todoItem'>
                        {todoItem}
                        <button
                          onClick={() => deleteTodo(index)}
                          className='btn btn-danger deleteBtn'
                        >
                          Delete
                        </button>
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TodoApp;

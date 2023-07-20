import React, { useEffect, useRef, useState } from "react";
import { deleteTodo, editTodo, toggleTodo, completeUndoTodo } from "../api/api";
import { useQueryClient, useMutation } from "react-query";
import {
  TodoDetailSection,
  TodoDetailContainer,
  ExitButton,
  TodoDetailTitle,
  TodoDetailContent,
  ButtonContainer,
  DeleteButton,
  CompletedButton,
  UpdateButton,
} from "./todoDetail.style";

/**
 * mainPage안의 todoList에서 todo의 detail들을 보여 주고 삭제, 수정, 완료 / 취소 기능이 있는 컴포넌트를 구현하는 함수 
 * @param {boolean} setDetailTodo TodoDetail modal을 열고 닫기 위한 state
 * @param {object} selectedTodoId data배열 안의 todo에서 가져온 id, title, content
 * @returns details of selected 'completed todo' or 'incomplete todo'
 */
const TodoDetail = ({ setDetailTodo, selectedTodoId }) => {
  /**
   * 수정된 title을 가지고 있는 state
   * @param {string} updateTitle 선택된 todo의 title을 기본값으로 가지고 있다가, 수정된 title을 가지는 state
   */
  const [updateTitle, setUpdateTitle] = useState(selectedTodoId.title);
  /**
   * 수정된 content를  가지고 있는 state
   * @param {string} updateContent 선택된 todo의 content를 기본값으로 가지고 있다가, 수정된 content를 가지는 state
   */
  const [updateContent, setUpdateContent] = useState(selectedTodoId.content);
  /**
   * TodoDetail modal이 열렸을 때, todoDeatailTitle를 useRef로 메모리 저장해둔다
   */
  const todoDeatailTitle = useRef();
  /**
   * useQueryClinet를 queryClient로 정의
   */
  const queryClient = useQueryClient();
  /**
   * 메모리에 저장해둔 todoDeatailTitle에 TodoDetail이 실행될 때 focus를 해주는 함수
   */
  useEffect(() => todoDeatailTitle.current.focus(), []);
  /**
   * 미완료 todo 삭제 뮤테이션 : deleteHandler에서 deleteTodoMutation을 id를 가지고 mutate
   * @param {function} deleteTodo api("/")에 delete request
   * @param {object} onSuccess key:onSuccess와 value:todoList의 query-key인 todo를 가지고 invalidate 하는 함수
   */
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
  /**
   * 완료 todo 삭제 뮤테이션 : completeDeleteHandler에서 completeDeleteTodoMutation을 id를 가지고 mutate
   * @param {function} deleteTodo api("/")에 delete request
   * @param {object} onSuccess key:onSuccess와 value:todoList의 query-key인 comTodo를 가지고 invalidate 하는 함수
   */
  const completeDeleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("comTodo");
    },
  });
  /**
   * 미완료 todo 수정 뮤테이션 : editHandler에서 editTodoMutation을 {id,title,content}를 가지고 mutate
   * @param {function} editTodo api("/incom")에 patch request
   * @param {object} onSuccess key:onSuccess와 value:todoList의 query-key인 todo를 가지고 invalidate 하는 함수
   */
  const editTodoMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
  /**
   * 완료 todo 수정 뮤테이션 : comEditHandler에서 comEditTodoMutation을 {id,title,content}를 가지고 mutate
   * @param {function} editTodo api("/incom")에 patch request
   * @param {object} onSuccess key:onSuccess와 value:todoList의 query-key인 comTodo를 가지고 invalidate 하는 함수
   */
  const comEditTodoMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("comTodo");
    },
  });
  /**
   * 완료 뮤테이션 : toggleHandler에서 toggleTodoMutation을 {id,isDone}를 가지고 mutate
   * @param {function} toggleTodo api("/incom")에 patch request
   * @param {object} onSuccess key:onSuccess와 value:todoList의 query-key인 comTodo를 가지고 invalidate 하는 함수
   */
  const toggleTodoMutation = useMutation(toggleTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("comTodo");
    },
  });
  /**
   * 완료 취소 뮤테이션 : undoToggleHandler에서 undoToggleTodoMutation을 {id,isDone}를 가지고 mutate
   * @param {function} completeUndoTodo api("/com")에 patch request
   * @param {object} onSuccess key:onSuccess와 value:todoList의 query-key인 comTodo를 가지고 invalidate 하는 함수
   */
  const undoToggleTodoMutation = useMutation(completeUndoTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
  /**
   * 미완료 todo 삭제 : with the users confirm handling onClick action from Delete Button by calling deleteTodoMutation
   * @param {number} id selectedTodoId의 postId
   * @return setDetailTodo를 false로 반환하며 TodoDetail modal를 닫는다.
   */
  const deleteHandler = (id) => {
    if (window.confirm("정말 해당 일을 삭제하시겠습니까?") === true) {
      deleteTodoMutation.mutate(id);
    }
    return setDetailTodo(false);
  };
  /**
   * 완료 todo 삭제 : with the users confirm handling onClick action from Delete Button by calling deleteTodoMutation
   * @param {number} id selectedTodoId의 postId
   * @return setDetailTodo를 false로 반환하며 TodoDetail modal를 닫는다.
   */
  const completeDeleteHandler = (id) => {
    if (window.confirm("정말 해당 일을 삭제하시겠습니까?") === true) {
      deleteTodoMutation.mutate(id);
    }
    completeDeleteTodoMutation.mutate(id);
    return setDetailTodo(false);
  };
  /**
   * 미완료 todo 수정 : with the users confirm handling onClick action from Update Button by calling editTodoMutation
   * @param {number} id selectedTodoId의 postId
   * @param {string} title updateTitle state안의 수정된 title
   * @param {string} content updateContent state안의 수정된 content
   * @return setDetailTodo를 false로 반환하며 TodoDetail modal를 닫는다.
   */
  const editHandler = () => {
    if (window.confirm("정말 해당 일을 수정하시겠습니까?") === true) {
      editTodoMutation.mutate({
        id: selectedTodoId.postId,
        title: updateTitle,
        content: updateContent,
      });
    }
    return setDetailTodo(false);
  };
  /**
   * 완료 todo 수정 : with the users confirm handling onClick action from Update Button by calling comEditTodoMutation
   * @param {number} id selectedTodoId의 postId
   * @param {string} title updateTitle state안의 수정된 title
   * @param {string} content updateContent state안의 수정된 content
   * @return setDetailTodo를 false로 반환하며 TodoDetail modal를 닫는다.
   */
  const comEditHandler = () => {
    // console.log("sending", id, title, content);
    if (window.confirm("정말 해당 일을 수정하시겠습니까?") === true) {
      comEditTodoMutation.mutate({
        id: selectedTodoId.postId,
        title: updateTitle,
        content: updateContent,
      });
    }
    return setDetailTodo(false);
  };
  /**
   * 미완료 todo를 완료 : with the users confirm handling onClick action from Complete Button by calling toggleTodoMutation
   * @param {number} id selectedTodoId의 postId
   * @param {boolean} isDone true로 변경된 selectedTodoId의 isDone
   * @return setDetailTodo를 false로 반환하며 TodoDetail modal를 닫는다.
   */
  const toggleHandler = () => {
    const toggleTodo = (selectedTodoId.isDone = true);
    toggleTodoMutation.mutate({
      id: selectedTodoId.postId,
      isDone: toggleTodo,
    });
    return setDetailTodo(false);
  };
  /**
   * 완료 todo를 취소 : with the users confirm handling onClick action from Cancel Button by calling undoToggleTodoMutation
   * @param {number} id selectedTodoId의 postId
   * @param {boolean} isDone false로 변경된 selectedTodoId의 isDone
   * @return setDetailTodo를 false로 반환하며 TodoDetail modal를 닫는다.
   */
  const undoToggleHandler = () => {
    const toggleTodo = (selectedTodoId.isDone = false);
    undoToggleTodoMutation.mutate({
      id: selectedTodoId.postId,
      isDone: toggleTodo,
    });
    return setDetailTodo(false);
  };

  return (
    <TodoDetailSection>
      <TodoDetailContainer>
        <ExitButton
          onClick={() => {
            setDetailTodo(false);
          }}
        />

        <TodoDetailTitle
          ref={todoDeatailTitle}
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        >
          {selectedTodoId.title}{" "}
        </TodoDetailTitle>
        <TodoDetailContent
          value={updateContent}
          onChange={(e) => setUpdateContent(e.target.value)}
        >
          {" "}
          {selectedTodoId.content}
        </TodoDetailContent>

        <ButtonContainer>
          {selectedTodoId.isDone === false ? (
            <DeleteButton onClick={() => deleteHandler(selectedTodoId.postId)}>
              Delete
            </DeleteButton>
          ) : (
            <DeleteButton
              onClick={() => completeDeleteHandler(selectedTodoId.postId)}
            >
              Delete
            </DeleteButton>
          )}
          {selectedTodoId.isDone === false ? (
            <UpdateButton
              onClick={() =>
                editHandler(selectedTodoId.postId, updateTitle, updateContent)
              }
            >
              Update
            </UpdateButton>
          ) : (
            <UpdateButton
              onClick={() =>
                comEditHandler(
                  selectedTodoId.postId,
                  updateTitle,
                  updateContent
                )
              }
            >
              Update
            </UpdateButton>
          )}
          {selectedTodoId.isDone === false ? (
            <CompletedButton
              onClick={() => toggleHandler(selectedTodoId.postId)}
            >
              Completed
            </CompletedButton>
          ) : (
            <CompletedButton
              onClick={() => undoToggleHandler(selectedTodoId.postId)}
            >
              Cancel
            </CompletedButton>
          )}
        </ButtonContainer>
      </TodoDetailContainer>
    </TodoDetailSection>
  );
};

export default TodoDetail;

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleStatus } from "../features/todo/todoSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { toast } from "react-toastify";
import { getPeority, getPeorityColor } from "../../constants/constant";

const Todos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todoReducer.todos);
  const counter = useSelector((state) => state.counterReducer.count);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(todos);
  const filteredtodos = useMemo(() => {
    console.log("In Filtered todos");
    return todos.filter((item) =>
      item.text
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase()
        .includes(searchQuery.replace(/[^a-zA-Z0-9]/g, "").toLowerCase())
    );
  }, [todos, searchQuery]);
  console.log("Counter State: " + counter);
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 30 },
    config: { duration: 100000 },
  });

  const handelUpdate = (id) => {
    const foundData = todos.filter((todo) => {
      return todo.id === id;
    });
    console.log("id found", foundData);
    if (foundData) {
      navigate("/addtask", { state: { found: foundData, type: "update" } });
    }
  };

  return (
    <animated.div style={{ ...styles.container, ...fadeIn }}>
      <header style={styles.header}>
        <h1>Todo Dashboard</h1>
        <button style={styles.logoutButton}>Logout</button>
        <button
          style={styles.logoutButton}
          onClick={() => navigate("/addtask")}
        >
          Add New Task
        </button>
      </header>
      <div style={styles.searchContainer}>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="Search tasks......"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
          style={styles.searchInput}
        />
        {/* Add search icon */}
      </div>
      <h3>
        Total Panding Task: {todos.filter((todo) => !todo.completed).length}
      </h3>
      <section style={styles.taskSection}>
        {filteredtodos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <div
              key={todo.id}
              style={{
                ...styles.taskItem,
                backgroundColor: getPeorityColor(todo.priority),
              }}
            >
              <p>Task: {todo.text}</p>
              <p>Description: {todo.description}</p>
              <p>Priority: {getPeority(todo.priority)}</p>
              <p>Created by: {todo.createdBy}</p>
              <p>Last Updated: {new Date(todo.lastUpdate).toLocaleString()}</p>
              <div style={styles.actions}>
                <button
                  style={styles.removeButton}
                  onClick={() => {
                    dispatch(removeTodo(todo.id));
                    toast.success(` ${todo.text} Task Removed Successfully!`, {
                      position: "top-center",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                  }}
                >
                  Remove
                </button>
                <button
                  style={styles.updateButton}
                  onClick={() => {
                    dispatch(toggleStatus(todo.id));
                    toast.success(
                      `${todo.text} Completed Successfully  Now You can remove this task`,
                      {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                      }
                    );
                  }}
                >
                  Change Task Status
                </button>
                <button
                  style={styles.updateButton}
                  onClick={() => handelUpdate(todo.id)}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
      </section>
      <h3>
        Total Completed Task: {todos.filter((todo) => todo.completed).length}
      </h3>
      <section style={styles.taskSection}>
        {filteredtodos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <div
              key={todo.id}
              style={{
                ...styles.taskItem,
                backgroundColor: getPeorityColor(todo.priority),
              }}
            >
              <p>Task: {todo.text}</p>
              <p>Description: {todo.description}</p>
              <p>Priority: {getPeority(todo.priority)}</p>
              <p>Created by: {todo.createdBy}</p>
              <p>Last Updated: {new Date(todo.lastUpdate).toLocaleString()}</p>
              <div style={styles.actions}>
                <button
                  style={styles.removeButton}
                  onClick={() => {
                    dispatch(removeTodo(todo.id));
                    toast.success(` ${todo.text} Task Removed Successfully!`, {
                      position: "top-center",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </section>
    </animated.div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  logoutButton: {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  searchContainer: {
    marginBottom: "20px",
    position: "sticky",
    top: "0",
    backgroundColor: "#fff",
    zIndex: "1",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  searchInput: {
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  taskSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  taskItem: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  actions: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  removeButton: {
    padding: "8px 16px",
    borderRadius: "5px",
    backgroundColor: "#e57373",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  updateButton: {
    padding: "8px 16px",
    borderRadius: "5px",
    backgroundColor: "#64b5f6",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Todos;

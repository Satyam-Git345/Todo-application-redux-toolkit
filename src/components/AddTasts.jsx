import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  text: Yup.string().required("Task Name is required"),
  description: Yup.string().required("Description is required"),
  createdby: Yup.string().required("Created By is required"),
  priority: Yup.string().required("Priority is required"),
});

const AddTasks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = location.state;

  const found = state?.found;
  const type = state?.type;

  console.log("Found data:", found);
  console.log("Type:", type);
  const initialValues = {
    text: (found && found[0]?.text) || "",
    description: (found && found[0]?.description) || "",
    createdby: (found && found[0]?.createdBy) || "",
    priority: (found && found[0]?.priority) || null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        console.log("Form Submission Success", values);
        dispatch(addTodo(values));
        toast.success(`${formik.values.text} Task added to your task list!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        resetForm({ values: "" });
        navigate("/");
      } catch (error) {
        resetForm({ values: "" });
        toast.error("Error while adding task!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    },
  });

  return (
    <div className="add-tasks-container">
      <h1 className="form-heading">Begin New Task</h1>
      <form onSubmit={formik.handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="text" className="form-label">
            Task Name:
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="form-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.text}
          />
          {formik.touched.text && formik.errors.text && (
            <div className="error-message">{formik.errors.text}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="priority" className="form-label">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            className="form-select"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.priority || ""}
          >
            <option value="">Select priority</option>
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
          {formik.touched.priority && formik.errors.priority ? (
            <div className="error-message">{formik.errors.priority}</div>
          ) : null}
        </div>
       <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="form-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="error-message">{formik.errors.description}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="createdby" className="form-label">
            Created By:
          </label>
          <input
            type="text"
            id="createdby"
            name="createdby"
            className="form-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.createdby}
          />
          {formik.touched.createdby && formik.errors.createdby && (
            <div className="error-message">{formik.errors.createdby}</div>
          )}
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="submit-button"
            onClick={() => {
              console.log("first");
            }}
          >
            {type ? "Update" : "Add"}
          </button>
          <label htmlFor="note" className="form-label-note">
            Note: Following task will automatically update in pending task list
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddTasks;
